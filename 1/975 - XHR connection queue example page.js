
      addEvent(window, 'load', function() {
        // Implementation.
        // 创建队列
        var q = new DED.Queue;
        q.setRetryCount(5);  // 重试次数
        q.setTimeout(3000); 

        var items = $('items');
        var results = $('results');
        var queue = $('queue-items');

        // Keeping track of my own requests as a client.
        var requests = [];

        // Notifier for each request that is being flushed.
        q.onFlush.subscribe(function(data) {
          results.innerHTML = data;
          requests.shift();
          queue.innerHTML = requests.toString();
        });
        // Notifier for any failures.
        q.onFailure.subscribe(function() {
          results.innerHTML += ' <span style="color:red;">Connection Error!</span>';
        });
        // Notifier of the completion of the flush.
        q.onComplete.subscribe(function() {
          results.innerHTML += ' <span style="color:green;">Completed!</span>';
        });
        var actionDispatcher = function(element) {
          switch (element) {
            case 'flush':
              q.flush();
              break;
            case 'dequeue':
              q.dequeue();
              requests.pop();
              queue.innerHTML = requests.toString();
              break;
            case 'pause':
              q.pause();
              break;
            case 'clear':
              q.clear();
              requests = [];
              queue.innerHTML = '';
              break;
          }
        };
                
        var addRequest = function(request) {
          var data = request.split('-')[1];
          q.add({
            method: 'GET',
            uri: 'bridge-connection-queue.php?ajax=true&s='+data,
            params: null
          });
          requests.push(data);
          queue.innerHTML = requests.toString();
        };
        addEvent(items, 'click', function(e) {
          var e = e || window.event;
          var src = e.target || e.srcElement;
          try {
            e.preventDefault();
          }
          catch (ex) {
            e.returnValue = false;
          }
          actionDispatcher(src.id);
        });

        var adders = $('adders');
        addEvent(adders, 'click', function(e) {
          var e = e || window.event;
          var src = e.target || e.srcElement;
          try {
            e.preventDefault();
          }
          catch (ex) {
            e.returnValue = false;
          }
          addRequest(src.id);
        });
      });
    