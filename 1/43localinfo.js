
            function replaceAll() {
                var cr = "\n";
                var display = "Hash: " + location.hash + cr;
                display += "Host " + location.host + cr;
                display += "Hostname " + location.hostname + cr;
                display += "Href " + location.href + cr;
                display += "Path Name: " + location.pathname + cr;
                display += "Port: " + location.port + cr;
                display += "protocol: " + location.protocol + cr;
                display += "Search " + location.search + cr;
                document.write(display);
                alert(display);
            }

        