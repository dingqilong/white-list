
        // application utilities
        var DED = {};
        // 添加一些应用程序工具
        DED.util = {
          // 用第二个参数传入的对象的属性值替换第一个参数传入的字符串中的相关部分
          substitute: function (s, o) {
            return s.replace(/{([^{}]*)}/g,
              function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
              }
            );
          },
          // ajax请求
          asyncRequest: function() {
            function handleReadyState(o, callback) {
              var poll = window.setInterval(
                function() {
                  if(o && o.readyState == 4) {
                    window.clearInterval(poll);
                    if ( callback ){
                      callback(o);
                    }
                  }
                },
                50
              );
            }
            var getXHR = function() {
              var http;
              try {
                http = new XMLHttpRequest;
                getXHR = function() {
                  return new XMLHttpRequest;
                };
              }
              catch(e) {
                var msxml = [
                  'MSXML2.XMLHTTP.3.0', 
                  'MSXML2.XMLHTTP', 
                  'Microsoft.XMLHTTP'
                ];
                for (var i=0, len = msxml.length; i < len; ++i) {
                  try {
                    http = new ActiveXObject(msxml[i]);
                    getXHR = function() {
                      return new ActiveXObject(msxml[i]);
                    };
                    break;
                  }
                  catch(e) {}
                }
              }
              return http;
            };
            return function(method, uri, callback, postData) {
              var http = getXHR();
              http.open(method, uri, true);
              handleReadyState(http, callback);
              http.send(postData || null);
              return http;
            };
          }()
        }
        
        // dedMail application interface.
        // 
        var dedMail = (function() {
          function request(id, type, callback) {
            DED.util.asyncRequest(
              'GET',
              'mail-api.php?ajax=true&id=' + id + '&type=' + type,
              function(o) {
                callback(o.responseText);
              }
            );
          }
          return {
          	// 该例子只实现了getMail方法，根据所提供的ID从服务器获取邮件，消息加载结束后，
          	// 作为参数传给getMail方法的回调函数callback将被调用。
            getMail: function(id, callback) {
              request(id, 'all', callback);
            },
            sendMail: function(body, recipient) {
              // Send mail with body text to the supplied recipient.
            },
            save: function(id) {
              // Save a draft copy with the supplied email ID.
            },
            move: function(id, destination) {
              // Move the email to the supplied destination folder.
            },
            archive: function(id) {
              // Archive the email. This can be a basic facade method that uses
              // the move method, hardcoding the destination.
            },
            trash: function(id) {
              // This can also be a facade method which moves the message to 
              // the trash folder.
            },
            reportSpam: function(id) {
              // Move message to spam folder and add sender to the blacklist.
            },
            formatMessage: function(e) {
              var e = e || window.event;
              try {
                e.preventDefault();
              } 
              catch(ex) {
                e.returnValue = false;
              }
              var targetEl = e.target || e.srcElement;
              var id = targetEl.id.toString().split('-')[1];
              dedMail.getMail(id, function(msgObject) {
                var resp = eval('('+msgObject+')');
                var details =  '<p><strong>From:</strong> {from}<br>';
                details += '<strong>Sent:</strong> {date}</p>';
                details += '<p><strong>Message:</strong><br>';
                details += '{message}</p>';
                messagePane.innerHTML = DED.util.substitute(details, resp);
              });
           }
          }
        } )();
        
        // Set up mail implementation.
        addEvent(window, 'load', function() {
          var threads = getElementsByClass('thread', 'a');
          var messagePane = $('message-pane');
          for (var i=0, len=threads.length; i<len; ++i) {
            addEvent(threads[i], 'click', formatMessage);
          }
        });
      