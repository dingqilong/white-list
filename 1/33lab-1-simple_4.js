
            /*
             * Make Sum from two values usinmg function and prompt
             */
            function doSum(x, y, z) {
                var sum = x + y + z;
                return sum;
            }
            var p = parseInt(prompt("Enter value for X: ", ""));
            var q = parseInt(prompt("Enter value for Y: ", ""));
            var r = parseInt(prompt("Enter value for Z: ", ""));
            var rs = doSum(p, q, r);
            document.write(rs);
        