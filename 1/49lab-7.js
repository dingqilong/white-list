
            //Make a Simple Function
            function simpleFunction1() {
                document.write("Hello Students");
            }
            
            //Call above function
            simpleFunction1();
            
            document.write("<hr/>");
            
            function simpleWithArgument(fn, mn, ln) {
                document.write("Full Name: " + fn + " " + mn + " " + ln);
            }
            // call above function
            simpleWithArgument("Mr.", "Donalt", "Trump");
            
            document.write("<hr/>");
            function simpleWithArgumentwithReturn(fn, mn, ln) {
                var fullname = fn + " " + mn + " " + ln;
                return  fullname;
            }
            // call above function
            document.write(simpleWithArgumentwithReturn("Mr.", "Donalt", "Trump"));
            
        