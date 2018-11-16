
  /* global $, clientOptions */
  'use strict';
  function log(a) {
    if ('console' in window && 'log' in window.console) {
        console.log(a);
    }
    $('#logs').append($('<code>').text(a));
    $('#logs').append($('<br>'));
    $('#logs').scrollTop($('#logs').scrollTop() + 10000);
  }

  var worker;
  function send() {
    worker.postMessage(JSON.stringify({ type: 'message', data: JSON.stringify({ t: (new Date()).getTime()}) }));
  }
  function onopen() {
    log('connected');
    $('#sameOrigin').attr('disabled', true);
    send();
  }
  function onclose(code, reason) {
    log('disconnected ' + code + ', ' + reason);
    $('#connect').each(function(_,e){
      e.disabled = '';
    });
    $('#disconnect').attr('disabled', true);
    $('#sameOrigin').attr('disabled', false);
  }

  var i = 0;
  function xonmessage(e) {
    var msg = JSON.parse(e);
    var td = (new Date()).getTime() - msg.t;
    $('#latency').text('' + i + '  ' + td + ' ms');
    i += 1;
    send();
  }

  $('#connect').click(function() {
      $('#connect').attr('disabled', true);
      $('#disconnect').each(function(_,e){
        e.disabled = '';
      });
      var transport = $('#transport').val() || undefined;
      log('[connecting] ' + transport);
      var url;
      if ($('#sameOrigin').prop('checked')) {
        if (window.location.origin) {
          url = window.location.origin;
        } else {
          url = window.location.protocol + '//' + window.location.hostname +
            (window.location.port ? ':' + window.location.port : '');
        }
      } else {
        url = clientOptions.url;
      }
      worker = new Worker('lib/worker.js');
      worker.onmessage = function (e) {
        var msg = JSON.parse(e.data);
        switch (msg.type) {
          case 'message':
            xonmessage(msg.data);
            break;
          case 'open':
            onopen();
            break;
          case 'close':
            onclose(msg.code, msg.reason);
            break;
          case 'error':
            console.error(msg.data);
            break;
          default:
            console.error('unknown type: ' + msg.type);
        }
      };

      worker.postMessage(JSON.stringify({ type: 'open', url: url + '/echo', transports: transport }));
  });
  $('#disconnect').click(function() {
    $('#disconnect').attr('disabled', true);
    log('[disconnecting]');
    worker.postMessage(JSON.stringify({ type: 'close' }));
  });
