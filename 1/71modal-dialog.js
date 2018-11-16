
        var emptyAsync = eval(Wind.compile("async", function () {
        
            var ok = false;            
            $await($("#dialog-confirm").dialogAsync({
                modal: true,
                buttons: {
                    "OK": function () {
                        ok = true;
                        $(this).dialog("close");
                    },
                    "Cancel": function () {
                        $(this).dialog("close");
                    }
                }
            }));

            if (ok) {
                // simulate an ajax call
                var response = $await($.ajaxAsync({
                    url: "modal-dialog.html",
                    dataType: "text"
                }));
                
                $("#emptyLength").text(response.data.length);
                $await($("#dialog-emptied").dialogAsync({ modal: true }));
            } else {
                $await($("#dialog-canceled").dialogAsync({ modal: true }));
            }

            console.log("done");
        }))
    