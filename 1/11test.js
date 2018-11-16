
      onload = function(){
      mocha.checkLeaks();
      mocha.globals(['foo']);
      var runner = mocha.run();

      // runner.on('test end', function(test){
      //   console.log(test.fullTitle());
      // });
      };
    