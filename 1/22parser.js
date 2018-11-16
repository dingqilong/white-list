
        var appendIndent = function (builder, indent) {
            for (var i = 0; i < indent; i++) builder.push("    ");
        }

        var serialize = function (builder, list, indent) {

            if (!list || !list.push) {
                appendIndent(builder, indent);

                builder.push(JSON.stringify(list));

                return;
            }

            appendIndent(builder, indent);
            builder.push("[\n");

            for (var i = 0; i < list.length; i++) {

                serialize(builder, list[i], indent + 1);
                if (i != list.length - 1) builder.push(",");
                builder.push("\n");
            }

            appendIndent(builder, indent);
            builder.push("]");
        }
        
        function parse() {
            var code = document.getElementById("code").value;
            var result;
            
            try {
                var list = Wind.parse(code);
                
                var builder = [];
                serialize(builder, list, 0);
                
                result = builder.join("");
            } catch (ex) {
                result = "error";
            }
            
            document.getElementById("r").innerHTML = "<pre style='font-family:consolas,monaco;'>" + result + "</pre>";
        }
    