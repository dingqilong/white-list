
            var tax = .05;
            function addTax(item) {
                var total = item + (item * tax);
                /*  var newTotal = Math.floor(total);
                 var fraction = Math.round(total * 100) % 100;
                 if (fraction < 10) {
                 fraction = "0" + fraction;
                 }
                 total = newTotal + " . " + fraction;
                 */
                alert("Your Total is: $" + total);

            }

        