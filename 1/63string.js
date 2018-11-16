
            var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            document.write("txt.length: " + txt.length + "<hr/>");
            document.write("The indexOf() method returns the index() of (the position of) the first occurrence of a specified text in a string" + "<br/>");
            var str = "Please locate where 'locate' occurs!";
            var pos = str.indexOf("locate");
            document.write("str.indexOf('locate'): " + pos + "<hr/>");

            document.write("Both indexOf(), and lastIndexOf() return -1 if the text is not found." + "<br/>");
            var str = "Please locate where 'locate' abc dhaka 'locate' Please occurs!";
            var pos = str.lastIndexOf("Please");
            document.write("str.lastIndexOf('Please'): " + pos + "<hr/>");

            var str = "Please locate where 'locate' occurs! where 'dhaka' occurs!";
            var pos = str.indexOf("locate", 30);
            document.write("str.indexOf('locate',30): " + pos + "<hr/>");

            var str = "Please locate where 'locate' occurs!";
            var pos = str.search("locate");
            document.write("str.search('locate'): " + pos + "<hr/>");

            var str = "Apple, Banana, Kiwi";
            var res = str.slice(7, 16);
            document.write("str.slice(7, 13): " + res + "<hr/>");

            var str = "Apple, Banana, Kiwi";
            var res = str.slice(-15, -6);
            document.write("str.slice(-15, -6): " + res + "<hr/>");

            var res = str.slice(7);
            document.write("str.slice(7): " + res + "<hr/>");
            var res = str.slice(-6);
            document.write("str.slice(-6): " + res + "<hr/>");

            var str = "Apple, Banana, Kiwi";
            var res = str.substring(7, 13);
            document.write("str.substring(7,13): " + res + "<hr/>");

            var str = "Apple, Banana, Kiwi";
            var res = str.substr(7, 6);
            document.write("str.substr(7,6): " + res + "<hr/>");
            var str = "Apple, Banana, Kiwi";
            var res = str.substr(7);
            document.write("str.substr(7): " + res + "<hr/>");
            var str = "Apple, Banana, Kiwi";
            var res = str.substr(-6);
            document.write("str.substr(-6): " + res + "<hr/>");

            str = "Please visit Microsoft!";
            var n = str.replace("Microsoft", "W3Schools");
            document.write("str.replace('Microsoft', 'W3Schools'): " + n + "<hr/>");

            document.write("To replace case insensitive, use a regular expression with an / i flag (insensitive)");
            str = "Please visit Microsoft!";
            var n = str.replace(/MICROSOFT/i, "W3Schools");
            document.write("str.replace(/MICROSOFT/i, 'W3Schools'): " + n + "<hr/>");

            str = "Please visit Microsoft and Microsoft!";
            var n = str.replace(/Microsoft/g, "W3Schools");
            document.write("str.replace(/MICROSOFT/g, 'W3Schools'): " + n + "<hr/>");

            var text1 = "Hello";
            var text2 = "World";
            var text3 = text1.concat(" ", text2);
             document.write("text1.concat(' ', text2): " + text3 + "<hr/>");
        