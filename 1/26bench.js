
  var sourceFileName = 'source.js';

  function runAcorn(code, locations) {
    acorn.parse(code, {ecmaVersion: 6, locations: locations, sourceFile: sourceFileName});
  }
  function runEsprima(code, locations) {
    esprima.parse(code, {loc: locations, source: sourceFileName});
  }
  function runTraceur(code) {
    var file = new traceur.syntax.SourceFile(sourceFileName, code);
    var parser = new traceur.syntax.Parser(file);
    parser.parseScript();
  }

  var totalLines = codemirror30.split("\n").length + jquery164.split("\n").length;

  var nowHost = (typeof performance === 'object' && 'now' in performance) ? performance : Date;

  function benchmark(runner, locations) {
    // Give it a chance to warm up (first runs are usually outliers)
    runner(jquery164, locations);
    runner(codemirror30, locations);
    var t0 = nowHost.now(), t1, lines = 0;
    for (;;) {
      runner(jquery164, locations);
      runner(codemirror30, locations);
      lines += totalLines;
      t1 = nowHost.now();
      if (t1 - t0 > 5000) break;
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
                {name: "Traceur", runner: runTraceur}];
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
