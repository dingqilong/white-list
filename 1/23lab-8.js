
            //Make a Simple Function
            var sum = 0;
            function doSum(startingNumber, endingNumber) {
                while (startingNumber <= endingNumber) {
                    sum += startingNumber;//sum=sum+startingNumber
                    startingNumber++;
                }
                return sum;
            }
            var sn = parseInt(prompt("Enter First Number", ""));
            var en = parseInt(prompt("Enter Last Number", ""));
            document.write(doSum(sn, en));


        