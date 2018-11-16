
            var x = parseInt(prompt("Enter First Number", ""));
            var y = parseInt(prompt("Enter Second Number", ""));
            if (x > y) {
                document.write(x + " is Greater Than " + y);
            } else if (x == y) {
                document.write(x + " is Equal To " + y);
            } else if (x < y) {
                document.write(x + " is Less Than " + y);
            } else {
                document.write("Invalid Input");
            }
        