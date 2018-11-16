
            var win;
          
            function closeWindow() {
                win.close();
            }
            function validateForm() {
                //////////////////////// for Name //////////////
                var fname = document.forms["myForm"]["fname"].value;

                var gender = document.forms["myForm"]["gender"].value;
                var education = "";

                if (document.forms["myForm"].ssc.checked) {
                    education += document.forms["myForm"]["ssc"].value;
                }

                if (document.forms["myForm"].hsc.checked) {
                    education += ", " + document.forms["myForm"]["hsc"].value;
                }
                var round = document.forms["myForm"]["round"].value;
                var msg = document.forms["myForm"]["msg"].value;
                ////////////////////////validation For Name Field////////////
                if (fname == "") {
                    document.getElementById('fnamex').innerHTML = "Name must be filled out";
                    return false;
                }else if (fname.length < 3) {
                    document.getElementById('fnamex').innerHTML = "Name Length at least 3 Characters";
                    return false;
                    ////////////////////////validation For Gender Field
                } else if (gender == "") {
                    document.getElementById('gender').innerHTML = "Tell Me Your Gender";
                    return false;
                    ////////////////////////validation For Education Field
                } else if (!document.forms["myForm"].ssc.checked && !document.forms["myForm"].hsc.checked) {
                    document.getElementById('education').innerHTML = "Tell Me Your education";
                    return false;
                    ////////////////////////validation For Round Field
                } else if (round == "Select A Round") {
                    document.getElementById('round').innerHTML = "Select Your Round";
                    return false;
                    ////////////////////////validation For Message Field
                } else if (msg.length < 10) {
                    document.getElementById('msg').innerHTML = "At least 10 characters";
                    return false;
                } else {
                    win = window.open("", "", "width=400");
                    win.document.write("<h2><center>Form Output</center></h2><hr>");
                    
                    win.document.write("Name: " + fname + "<br/>");
                    win.document.write("Gender: " + gender + "<br/>");

                    win.document.write("Education: " + education + "<br/>");
                    win.document.write("Round: " + round + "<br/>");
                    win.document.write("Comments: " + msg + "<br/>");
                }
            }
        