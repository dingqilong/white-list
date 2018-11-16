
  function runAcorn(code, locations) {
    acorn.parse(code, {locations: locations});
  }
  function runEsprima(code, locations) {
    esprima.parse(code, {loc: locations});
  }
  function runUglifyJS(code) {
    uglifyjs.parse(code);
  }

  var totalLines = codemirror30.split("\n").length + jquery164.split("\n").length;

  function benchmark(runner, locations) {
    // Give it a chance to warm up (first runs are usually outliers)
    runner(jquery164, locations);
    runner(codemirror30, locations);
    var t0 = +new Date, t1, lines = 0;
    for (;;) {
      runner(jquery164, locations);
      runner(codemirror30, locations);
      lines += totalLines;
      t1 = +new Date;
      if (t1 - t0 > 2000) break;
    }
    return lines / ((t1 - t0) / 1000);
  }

  function showOutput(values) {
    var html = "<hr><table>";
    for (var i = 0; i < values.length; ++i)
      html += "<tr><th>" + values[i].name + "</td><td>" + Math.round(values[i].score) + " lines per second</td><td>" +
                        Math.round(values[i].score * 100 / values[0].score) + "%</td></tr>";
    document.body.appendChild(document.createElement("div")).innerHTML = html;
  }

  function run(locations, acornOnly) {
    var running = document.getElementById("running");
    running.innerHTML = "Running benchmark...";
    var data = [{name: "Acorn", runner: runAcorn},
                {name: "Esprima", runner: runEsprima},
                {name: "UglifyJS2", runner: runUglifyJS}];
    if (acornOnly) data.length = 1;
    var pos = 0;
    function next() {
      data[pos].score = benchmark(data[pos].runner, locations);
      if (++pos == data.length) {
        running.innerHTML = "";
        showOutput(data);
      } else setTimeout(next, 100);
    }
    setTimeout(next, 50);
  }
