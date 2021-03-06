
            /* Title: iife for loops
             * Description: loops that make use of counters as expected
             */

            // this will log 'regular loop 5'
            for (var i = 0; i < 5; i++) {
              setTimeout(function() {
                console.log('regular loop', i);
              }, 3000);
            }

            // this will log 'iife loop 1', 'iife loop 2', 'iife loop 3', 'iife loop 4'
            for (var i = 0; i < 5; i++) {
              (function(n) {
                setTimeout(function() {
                  console.log('iife loop', n);
                }, 3000);
              })(i);
            }

            // same results as the iife loop. Let isn't supported by all javascript versions
            for (let i = 0; i < 5; i++) {
              setTimeout(function() {
                console.log('let loop', i);
              }, 3000);
            }

            // References
            // http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        