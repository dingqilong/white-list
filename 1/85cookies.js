
        function setCookie(domain, name) {
            document.cookie = name + "=ok;path=/;domain=" + domain;            
        }

        function showCookie() {
            document.getElementById("result").innerHTML = "<p>" + document.cookie + "</p>";
        }
    