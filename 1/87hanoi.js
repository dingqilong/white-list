
        var dishesInStick = [0, 0, 0];
        var dishes = [];
        var dishCount = 0;
        
        var bottomLength = 300;
        var stickX = 200;
        var stickBottom = 250;
        var stickWidth = 6;
        var stickHeight = 200;
        var dishMinWidth = 50;
        var dishIndentWidth = 20;
        var dishHeight = 20;
        
        var getDishWidth = function(n) {
            return dishMinWidth + n * dishIndentWidth;
        }
        
        var getDishLeft = function(n, stick) {
            return stickX + stick * bottomLength - getDishWidth(n) / 2;
        }
        
        var getDishTop = function(level) {
            return stickBottom - level * dishHeight;
        }
        
        var init = function(n) {
            dishCount = n;
            dishesInStick[0] = n;
        
            for (var i = 0; i < 3; i++) {
                var stick = document.createElement("div");
                stick.style.position = "absolute";
                stick.style.backgroundColor = "black";
                stick.style.width = stickWidth + "px";
                stick.style.height = stickHeight + "px";
                stick.style.top = (stickBottom - stickHeight) + "px";
                stick.style.left = Math.round(stickX + bottomLength * i - stickWidth / 2) + "px";
                document.body.appendChild(stick);
            }
        
            for (var i = n - 1; i >= 0; i--) {            
                var dish = document.createElement("div");
                dish.style.position = "absolute";
                dish.style.backgroundColor = "red";
                
                dish.style.width = getDishWidth(i) + "px";
                dish.style.height = dishHeight + "px";
                dish.style.top = getDishTop(dishCount - i) + "px";
                dish.style.left = getDishLeft(i, 0) + "px";
                dish.style.textAlign = "center";
                dish.style.color = "white";
                dish.innerHTML = i.toString();
                
                document.body.appendChild(dish);

                dishes[i] = dish;
            }
        }
        
        var moveAsync = eval(Wind.compile("async", function(e, startPos, endPos, duration) {
            for (var t = 0; t < duration; t += 50) {
                e.style.left = (startPos.x + (endPos.x - startPos.x) * t / duration) + "px";
                e.style.top = (startPos.y + (endPos.y - startPos.y) * t / duration) + "px";
                $await(Wind.Async.sleep(50));
            }

            e.style.left = endPos.x;
            e.style.top = endPos.y;
        }));
        
        var moveDishAsync = eval(Wind.compile("async", function(n, a, b) {
            var startPos = {
                x: getDishLeft(n, a),
                y: getDishTop(dishesInStick[a])
            };
            
            var endPos = {
                x: getDishLeft(n, b),
                y: getDishTop(dishesInStick[b] + 1)
            };
            
            $await(moveAsync(dishes[n], startPos, endPos, 500));
            
            dishesInStick[a]--;
            dishesInStick[b]++;
        }));

        var hanoiAsync = eval(Wind.compile("async", function(n, from, to, mid) {
            if (n > 0) {
                $await(hanoiAsync(n - 1, from, mid, to));
            }
            
            // wait for the button's being clicked
            // var btnNext = document.getElementById("btnNext");
            // $await(Wind.Async.onEvent(btnNext, "click"));

            $await(moveDishAsync(n, from, to));

            if (n > 0) {
                $await(hanoiAsync(n - 1, mid, to, from));
            }
        }));

    