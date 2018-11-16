
        Wind.binders["async"] = "$await";

        function generate() {
            var code = document.getElementById("code").value;
            var result;
            
            try {
                var result = Wind.compile("async", "function () { " + code + " }", true).code;
            } catch (ex) {
                result = "error";
            }
            
            document.getElementById("r").innerHTML = "<pre style='font-family:consolas,monaco;'>" + result + "</pre>";
        }
    