
        var eventbus = yongboy.eventbus;

        eventbus.on('myEvent', function () {
            alert('Publish Message~');
        });
        eventbus.on('myEvent2', function () {
            alert('Publish Message Again~');
        });

        eventbus.subscribe('myEvent3', function () {
            alert('Publish Message 3rd Times~');
        });

        eventbus.on('myEvent4', function (msg) {
            alert('Publish Message 4th Times with args : ' + msg);
        });
        eventbus.on('myEvent5', function (msg, id) {
            alert('Publish Message 4th Times with args : ' + msg + " id : " + id);
        });

        function pubshMsg(event, args) {
            eventbus.broadcast(event, args);
        }

        function pubshMsg2(event) {
            eventbus.broadcast('myEvent5', 'EventBus Msg Here ..', 10);
        }
    