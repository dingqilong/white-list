
            /*
             * Make Sum from two values usinmg function and prompt
             */
            function doFullName(fn, mn, ln) {
                var fullName = fn + " " + mn + " " + ln;
                return fullName;
            }
            var firstName = prompt("Enter value for First Name: ", "");
            var middleName = prompt("Enter value for Middle: ", "");
            var lastName = prompt("Enter value for Last Name: ", "");
            var rs = doFullName(firstName, middleName, lastName);
            document.write(rs);
        