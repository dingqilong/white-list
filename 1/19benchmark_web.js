
    function start() {
      document.getElementById("waitMessage").style.display = "";

      setTimeout(function() {
        startBenchmark(document.getElementById("output"));
      }, 100);
    }
  