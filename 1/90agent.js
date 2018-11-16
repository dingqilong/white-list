
        var moveAsync = eval(Wind.compile("async", function(e, startPos, endPos, duration) {
            for (var t = 0; t < duration; t += 50) {
                e.style.left = (startPos.x + (endPos.x - startPos.x) * t / duration) + "px";
                e.style.top = (startPos.y + (endPos.y - startPos.y) * t / duration) + "px";
                $await(Wind.Async.sleep(50));
            }

            e.style.left = endPos.x;
            e.style.top = endPos.y;
        }));

        var createBlock = function () {
            var div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.border = "solid 1px black";
            div.style.backgroundColor = "red";
            div.style.position = "absolute";

            document.body.appendChild(div);
            return div;
        }

        var number = 0;

        var moveOneAsync = eval(Wind.compile("async", function (n) {
            var top = 50 + n * 60;
            var duration = 200 + Math.random() * 1000;
            $await(moveAsync(createBlock(), {x: 10, y: top}, {x: 500, y: top}, duration));
        }));

        var agent = new Wind.Async.Agent();
        
        var process = eval(Wind.compile("async", function () {
            while (true) {
                var n = $await(agent.receive());
                $await(moveOneAsync(n));
            }
        }));
        
        process().start();
    