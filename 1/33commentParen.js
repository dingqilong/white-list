
      requirejs.config({
          baseUrl: './'
      });

      require(['a'], function(a) {
          doh.register(
              'commentParen',
              [
                  function cjsDotRequire(t){
                      t.is('a', a.name);
                      t.is('b', a.b.name);
                  }
              ]
          );
          doh.run();
      });
    