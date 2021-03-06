

    var print = function (s) {
        document.write(s + "<br />");
    }

    var infinite = eval(Wind.compile("seq", function (start) {
        while (true) {
            $yield(start++);
        }
    }));

    var fib = eval(Wind.compile("seq", function () {
        
        $yield(0);
        $yield(1);

        var a = 0, current = 1;
        while (true) {
            var b = a;
            a = current;
            current = a + b;

            $yield(current);
        }
    }))
    
    fib()
        .filter(function (n) { return n % 2 == 0; })
        .skip(2)
        .take(5)
        .zip(infinite(1))
        .map(function (a) { return a[1] + ": " + a[0]; })
        .each(print);

    