
  function ready(callback) {
    if (document.readyState === 'complete') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener( 'DOMContentLoaded', callback, false );
      window.addEventListener( 'load', callback, false );
    }
  }

  ready(function () {
    var results = document.getElementById('results');

    Rx.config.longStackSupport = true;

    var source = Rx.Observable.of(1,2,3);
    source.flatMap(function () {
      return Rx.Observable.throwError(new Error());
    }).subscribe(
      function (x) { results.innerHTML = x; },
      function (err) { results.innerHTML = err.stack; }
    );
  });
  