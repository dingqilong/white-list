
      // Title: 4 different ways to call function
      
      var foo, bar, baz, myapp;


      function foo(a, b) {
        return [this, a, b];
      };
      // using () operator
      // if the function is called without an explicit owner object
      // `this` keyword will refers to global
      // 
      // bar = [window, 1, 2]
      bar = foo(1, 2);
      console.log(bar);


      myapp = {
        baz: foo,
        onemore: function() {
          function insideTheClosure() {
            return this;
          }
          return [this, insideTheClosure()]
        }
      };

      // still using () operator
      // but now baz function belongs to myapp object
      //
      // bar = [myapp, 1, 2]
      bar = myapp.baz(1, 2);
      console.log(bar);

      // like in the first example we need to call function
      // within myapp like myapp.baz()
      // not just inside the object`s function
      // 
      // bar = [myapp, window]
      bar = myapp.onemore();
      console.log(bar);


      // using apply and call methods of the Function itself
      // there are almost the same
      // but apply could be useful in case we don't know arguments beforehand
      // 
      // bar = [myapp, 1, 2]
      bar = foo.call(myapp, 1, 2);
      console.log(bar);
      bar = foo.apply(myapp, [1, 2]);
      console.log(bar);


      /* Reference:
       * http://devlicio.us/blogs/sergio_pereira/archive/2009/02/09/JavaScript-5-ways-to-call-a-function.aspx
       */
    