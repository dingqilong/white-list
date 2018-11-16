
    function log(a) {
            if ('console' in window && 'log' in window.console) {
                console.log(a);
            }
            $('#logs').append($("<code>").text(a));
            $('#logs').append($("<br>"));
            $('#logs').scrollTop($('#logs').scrollTop()+10000);
      }

    var sjs = null;
    var transport;
    $('#connect').click(function() {
        $('#connect').attr('disabled', true);
        $('#disconnect').each(function(_,e){e.disabled='';});
        var transport = $('#transport').val() || undefined;
        if (transport === 'not-websocket') {
            transport = ['xdr-streaming',
                      'xhr-streaming',
                      'eventsource',
                      'iframe-eventsource',
                      'htmlfile',
                      'iframe-htmlfile',
                      'xdr-polling',
                      'xhr-polling',
                      'iframe-xhr-polling',
                      'jsonp-polling'];
        }
        log('[connecting] ' + transport);
        var url;
        if ($('#sameOrigin').prop('checked')) {
          if (window.location.origin) url = window.location.origin;
          else {
            url = window.location.protocol + '//' + window.location.hostname +
              (window.location.port ? ':' + window.location.port : '');
          }
        } else {
          url = clientOptions.url;
        }
        sjs = new SockJS(url + '/broadcast', null, { transports: transport });
        sjs.onopen = onopen
        sjs.onclose = onclose;
        sjs.onmessage = xonmessage;
    });
    $('#disconnect').click(function() {
        $('#disconnect').attr('disabled', true);
        log('[disconnecting]');
        sjs.close();
    });

    var onopen = function() {
        log('connected ' + sjs.transport);
        $('#sameOrigin').attr('disabled', true);
    };
    var onclose = function(e) {
        log('disconnected ' + e.code + ', ' + e.reason);
        $('#connect').each(function(_,e){e.disabled='';});
        $('#disconnect').attr('disabled', true);
        $('#sameOrigin').attr('disabled', false);
    };
    var myself = (''+Math.random()).substr(2);
    var xonmessage = function(e) {
        var msg = JSON.parse(e.data);
        if (msg.id === myself) {
            var td = (new Date()).getTime() - msg.t;
            $('#latency').text('' + td + ' ms');
        }
        var id = 'cursor_'+msg.id;
        if ($('#'+id).length === 0) {
            $("body").append('<div id="' + id + '" class="cursor"></div>');
        }
        $('#'+id).offset({top:msg.y-15, left:msg.x-15});
    };
    var x, y;
    var last_x, last_y, tref;
    $(document).mousemove(function(e) {
         x = e.pageX; y = e.pageY;
         if(!tref) poll();
    });
    var poll = function() {
         tref = null;
         if (last_x === x && last_y === y)
             return;
         var msg = {x:x, y:y, t: (new Date()).getTime(), id:myself};
         last_x = x; last_y = y;
         var raw_msg = JSON.stringify(msg);
         if (sjs && sjs.readyState === SockJS.OPEN) {
             sjs.send(raw_msg);
         }
         tref = setTimeout(poll, 200);
    };
    $('#connect').each(function(_,e){e.disabled='';});
    $('#disconnect').attr('disabled', true);
