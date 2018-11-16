
            var sn = parseInt(prompt("Enter Starting Number", ""));
            var en = parseInt(prompt("Enter Ending Number", ""));
            var sum = 0;
            function makeSum(startingNum, endingNum) {
                if (startingNum < endingNum) {
                    for (startingNum; startingNum <= endingNum;
                            startingNum++) {
                        sum += startingNum;
                    }
                } else if (startingNum > endingNum) {
                    for (startingNum; startingNum >= endingNum;
                            startingNum--) {
                        sum += startingNum;
                    }
                } else if (startingNum == endingNum) {
                    sum = startingNum;
                } else {
                    sum = 0;
                }
                return sum;
            }
            alert(makeSum(sn, en));

        