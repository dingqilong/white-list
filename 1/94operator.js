
            var x = 10;
            var y = 15;
            //Arithmatic operator
            document.write(x + y);
            document.write("<hr/>");
            document.write(x - y);
            document.write("<hr/>");
            document.write(x * y);
            document.write("<hr/>");
            document.write(x / y);
            document.write("<hr/>");
            document.write(x % y);
            document.write("<hr/>");
            //Comparison operator
            document.write(x > y);
            document.write("<hr/>");
            document.write(x < y);
            document.write("<hr/>");
            document.write(x == y);
            document.write("<hr/>");
            document.write(x === y);
            document.write("<hr/>");
            document.write(x >= y);
            document.write("<hr/>");
            document.write(x <= y);
            document.write("<hr/>");

            //Assignment Operator
            x += 100;
            document.write(x);
            document.write("<hr/>");
            x = x + 100;
            document.write(x);
            document.write("<hr/>");
            x -= 50;//x=x-50
            document.write(x);
            document.write("<hr/>");

            x *= 2;//x=x*2
            document.write(x);
            document.write("<hr/>");
            x /= 5;//x=x/5
            document.write(x);
            document.write("<hr/>");
            x %= 9;//x=x%9
            document.write(x);
            document.write("<hr/>");

            //Increment or decrement
            // pre/post-increment and pre/post-decrement
            /////////////// x=1
            x++;//post-increment
            document.write(x);
            document.write("<hr/>");
            document.write(x++);
            document.write("<hr/>");
            document.write(x);//x=3
            document.write("<hr/>");
            document.write(++x);
            document.write("<hr/>");
            document.write(--x);
            document.write("<hr/>");
            document.write(x--);
            document.write("<hr/>");
            document.write(x);
            document.write("<hr/>");
            var p = 15;
            var q = 100;
            document.write(p === q);

            // ternay operator
            //expression ? true message : false message
            //  alert(p > q ? "True Hoise" : "False Hoise");
            if (p > q) {
                //       alert("True Hoise");
            } else {
                //       alert("False Hoise");
            }

            var bd = null;
            document.write(typeof bd);

            // Logical && , || , !
            if (p == 15 && q == 10) {
                alert("True");
            } else {
                alert("False");
            }
            if (p == 15 || q == 10) {
                alert("True");
            } else {
                alert("False");
            }

            if (!(p == 15 && q == 10)) {
                alert("True");
            } else {
                alert("False");
            }
//Bitwise operator

            var m = 5;
            var n = 1;
            document.write("<hr/>");
            document.write(m.toString(2) & n.toString(2));
            document.write("<hr/>");
            document.write(m.toString(2) | n.toString(2));
            document.write("<hr/>");
            document.write(m.toString(2) ^ n.toString(2));
            document.write("<hr/>");
            var rs = m.toString(2);
            document.write(~rs);


        