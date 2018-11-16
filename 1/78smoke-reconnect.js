
    function log(a) {
            if ('console' in window && 'log' in window.console) {
                console.log(a);
            }
            $('#logs').append($("<code>").text(a));
            $('#logs').append($("<br>"));
            $('#logs').scrollTop($('#logs').scrollTop()+10000);
      }

    var started = false;
    var sjs;
    var i = 0;
    var transport;
    var t0;
    function onopen() {
      $('#sameOrigin').attr('disabled', true);
       var td = (new Date()).getTime() - t0;
       i += 1;
       $('#out').text(''+i +'  ' + td + ' ms');
       sjs.close();
    };
    function onclose(e) {
        if (started && e.code === 1000) {
            t0 = (new Date()).getTime();
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
            sjs = new SockJS(clientOptions.url + '/echo', null, { transports: transport });
            sjs.onopen = onopen
            sjs.onclose = onclose;
        } else {
            log('[stopped] ' + e.code + ', ' + e.reason);
            $('#connect').each(function(_,e){e.disabled='';});
            $('#disconnect').attr('disabled', true);
            $('#sameOrigin').attr('disabled', false);
        }
    };

    $('#connect').click(function() {
        started = true;
        transport = $('#transport').val() || undefined;
        log('[starting] ' + transport);
        onclose({code:1000});
        $('#connect').attr('disabled', true);
        $('#disconnect').each(function(_,e){e.disabled='';});
    });
    $('#disconnect').click(function() {
        $('#disconnect').attr('disabled', true);
        log('[stopping...]');
        started = false;
    });
