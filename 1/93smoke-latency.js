
    function log(a) {
            if ('console' in window && 'log' in window.console) {
                console.log(a);
            }
            $('#logs').append($("<code>").text(a));
            $('#logs').append($("<br>"));
            $('#logs').scrollTop($('#logs').scrollTop()+10000);
      }

    var sjs;
    function onopen() {
            log('connected ' + sjs.transport);
            $('#sameOrigin').attr('disabled', true);
            send();
    };
    function onclose(e) {
            log('disconnected ' + e.code + ', ' + e.reason);
            $('#connect').each(function(_,e){e.disabled='';});
            $('#disconnect').attr('disabled', true);
            $('#sameOrigin').attr('disabled', false);
    };
    function send() {
        sjs.send(JSON.stringify({t: (new Date()).getTime()}));
    };
    var i = 0;
    function xonmessage(e) {
            var msg = JSON.parse(e.data);
            var td = (new Date()).getTime() - msg.t;
            $('#latency').text(''+i +'  ' + td + ' ms');
            i += 1;
            send();
    };

    $('#connect').click(function() {
        $('#connect').attr('disabled', true);
        $('#disconnect').each(function(_,e){e.disabled='';});
        var transport = $('#transport').val() || undefined;
        log('[connecting] ' + transport);
        var url;
        if ($('#url').val()) {
          url = $('#url').val();
        } else if ($('#sameOrigin').prop('checked')) {
          if (window.location.origin) url = window.location.origin;
          else {
            url = window.location.protocol + '//' + window.location.hostname +
              (window.location.port ? ':' + window.location.port : '');
          }
          url += '/echo';
        } else {
          url = clientOptions.url + '/echo';
        }
        sjs = new SockJS(url, null, { transports: transport });
        sjs.onopen = onopen
        sjs.onclose = onclose;
        sjs.onmessage = xonmessage;
    });
    $('#disconnect').click(function() {
        $('#disconnect').attr('disabled', true);
        log('[disconnecting]');
        sjs.close();
    });
