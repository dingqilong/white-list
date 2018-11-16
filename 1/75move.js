
        var moveAsync = eval(Wind.compile("async", function(e, startPos, endPos, duration) {
            for (var t = 0; t < duration; t += 50) {
                e.style.left = (startPos.x + (endPos.x - startPos.x) * t / duration) + "px";
                e.style.top = (startPos.y + (endPos.y - startPos.y) * t / duration) + "px";
                $await(Wind.Async.sleep(50));
            }

            e.style.left = endPos.x;
            e.style.top = endPos.y;
        }));
        
        var moveSquareAsync = eval(Wind.compile("async", function(e) {
            $await(moveAsync(e, {x:100, y:100}, {x:400, y:100}, 1000));
            $await(moveAsync(e, {x:400, y:100}, {x:400, y:400}, 1000));
            $await(moveAsync(e, {x:400, y:400}, {x:100, y:400}, 1000));
            $await(moveAsync(e, {x:100, y:400}, {x:100, y:100}, 1000));
        }));
    