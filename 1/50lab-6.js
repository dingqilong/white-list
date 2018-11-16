
            //2 theke 5 porjonto, 
            var counter = 0;//Sequence
            var endIt = 10;
            while (counter <= endIt) {//Loop Begins
                counter++;
                /*  if (counter >= 2 && counter <= 5) {
                 document.write("Rs: " + counter + "<br/>");
                 }
                 */
                if (counter < 2 || counter > 5) {
                    continue;
                }
                document.write("Rs: " + counter + "<br/>");
                console.log("Rs: " + counter + "<br/>");
            }//Loop ends

        