
    
    var SoftTimer = function (interval) {
        this._currentTime = new Date();

        this._timeoutHead = {};
        this._timeoutTail = {};
        this._timeoutHead.next = this._timeoutTail;
        this._timeoutTail.prev = this._timeoutHead;

        var _this = this;
        var updateLoop = function () {
            _this._update();
            setTimeout(updateLoop, interval);
        }
        setTimeout(updateLoop, interval);
    }
    SoftTimer.prototype.setTimeout = function (onTimeout, delay) {
        var timeout = {
            onTimeout: onTimeout,
            beginTime: this._currentTime,
            delay: delay
        };

        this._timeoutTail.prev.next = timeout;
        timeout.prev = this._timeoutTail.prev;
        timeout.next = this._timeoutTail;
        this._timeoutTail.prev = timeout;
    }
    SoftTimer.prototype._update = function () {
        var currTime = this._currentTime = new Date();
        var timeoutToRemove = [];

        for (var timeout = this._timeoutHead.next; timeout != this._timeoutTail; timeout = timeout.next) {
            if (currTime - timeout.beginTime >= timeout.delay) {
                timeoutToRemove.push(timeout);
                try {
                    timeout.onTimeout();
                } catch (ex) { }
            }
        }

        for (var i = 0; i < timeoutToRemove.length; i++) {
            var timeout = timeoutToRemove[i];
            timeout.prev.next = timeout.next;
            timeout.next.prev = timeout.prev;
            timeout.next = timeout.prev = null;
        }
    }
    SoftTimer.prototype.setTimeoutAsync = function (delay) {
        var _this = this;
        return {
            start: function (callback) {
                _this.setTimeout(
                    function () { callback("normal"); },
                    delay);
            }
        }
    }

    var NativeTimer = function () { }
    NativeTimer.prototype.setTimeoutAsync = function (delay) {
        return Wind.Async.sleep(delay);
    }

    