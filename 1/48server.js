var passed = 0;
var failed = 0;
var expected = 0;
var resultSet = {};

var getName = function (result) {
  return result.groupPath.join(" - ") + " - " + result.test;
};

Meteor.startup(function () {
  console.log("running server-side tests");
  Tinytest._runTests(function (results) {
    var name = getName(results);
    if (!_.has(resultSet, name)) {
      var testPath = EJSON.clone(results.groupPath);
      testPath.push(results.test);
      resultSet[name] = {
        name: name,
        status: "PENDING",
        events: [],
        testPath: testPath
      };
    }
    _.each(results.events, function (event) {
      resultSet[name].events.push(event);
      switch (event.type) {
      case "ok":
        break;
      case "expected_fail":
        if (resultSet[name].status !== "FAIL")
          resultSet[name].status = "EXPECTED";
        break;
      case "exception":
        console.log(name, ":", "!!!!!!!!! FAIL !!!!!!!!!!!");
        if (event.details && event.details.stack)
          console.log(event.details.stack);
        else
          console.log("Test failed with exception");
        failed++;
        break;
      case "finish":
        switch (resultSet[name].status) {
        case "OK":
          break;
        case "PENDING":
          resultSet[name].status = "OK";
          console.log(name, ":", "OK");
          passed++;
          break;
        case "EXPECTED":
          console.log(name, ":", "EXPECTED FAILURE");
          expected++;
          break;
        case "FAIL":
          failed++;
          console.log(name, ":", "!!!!!!!!! FAIL !!!!!!!!!!!");
          console.log(JSON.stringify(resultSet[name].info));
          break;
        default:
          console.log(name, ": unknown state for the test to be in");
        }
        break;
      default:
        resultSet[name].status = "FAIL";
        resultSet[name].info = results;
        break;
      }
    });
  }, function () {
    console.log("passed/expected/failed/total",
                passed, "/", expected, "/", failed, "/", _.size(resultSet));
    if (failed > 0) {
      console.log("TESTS FAILED");
    } else {
      console.log("ALL TESTS PASSED");
    }
    process.exit(failed ? 1 : 0);
  });
});
sponse.writeHead(200, { 'Content-Type': mime.getType(path) });
        response.end(file.contents);
        return;
      }
    }
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
  }

  start(): Promise<Server> {
    /*
     * Boot up the server's HTTP & LiveReload endpoints. This method
     * can be called multiple times.
     *
     * @returns {Promise} resolved when server starts
     */
    return new Promise(resolve => {
      // idempotent
      if (this._http) {
        return resolve(this);
      }

      if (!this._disableLiveReload) {
        this._lr = liveReload();
      }
      this._http = http.createServer(this.handler.bind(this));

      return Promise.all([
        this._lr && pify(this._lr.listen.bind(this._lr))(35729),
        pify(this._http.listen.bind(this._http))(this._port)
      ]).then(() => {
        this.emit('listening');
        return resolve(this);
      });
    });
  }

  stop(): Promise<Server> {
    /*
     * Shut down the server's HTTP & LiveReload endpoints. This method
     * can be called multiple times.
     */
    return Promise.all([
      this._http && this._http.close(),
      this._lr && this._lr.close()
    ]).then(() => {
      delete this._http;
      delete this._lr;
      return this;
    });
  }
}

module.exports = Server;
