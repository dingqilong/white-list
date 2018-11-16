
            var counter = 0;//Sequence
            var endIt = 10;
            var sum=0;
            while (counter <= endIt) {//Loop Begins
                counter++;
                
                if ((counter % 2) == 0) {
                    sum+=counter;
                    document.write("Sum: " + sum+"<br/>");
                   // document.write("Even Num: " + counter+"<br/>");
                }
            }//Loop ends
            
        