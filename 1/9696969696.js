
    $("#test").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "/search",
                dataType: "json",
                type:'post',
                data: {
                    keyWord: request.term
                },
                success: function(data) {
                    response($.map(data.data, function(item) {
                        return {
                            label: item.title
                        }
                    }));
                }
            });
        },
        minLength: 2,
        open: function() {  //在下拉框被显示的时候触发
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {  //在下拉框被隐藏的时候触发
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
