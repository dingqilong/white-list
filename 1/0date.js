
            var nowdate = new Date();
            document.write("nowdate: " + nowdate + "<hr/>");
            var date = nowdate.getDate();
            document.write("date: " + date + "<hr/>");
            var month = nowdate.getMonth();
            document.write("Month: " + month + "<hr/>");
            var day = nowdate.getDay();
            document.write("Day: " + day + "<hr/>");
            if (day == 2 && month == 5) {
                alert("Wow, It is Tuesday of June,4th week ");
            } else {
                alert("noooooooooooooooo")
            }
            var ms = nowdate.getMilliseconds();
            document.write("Ms from 1/1/1970 " + ms + "<hr/>");
        