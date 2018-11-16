
        /*
        $(document).ready(function () {
            $("#btnSearch").click(function (){
                
                $("#result").empty();
                var keyword = encodeURIComponent($("#txtKeyword").val());

                $.ajax({
                    url: "http://api.t.sina.com.cn/trends/statuses.json?trend_name=" + keyword + "&source=3355748460",
                    dataType: "jsonp",
                    success: function (data) {
                        $.each(data, function () {
                            $("#result").append("<li>" + this.text + "</li>");
                        });
                    }
                });
            });
        });
        */
        
        var goAsync = eval(Wind.compile("async", function () {
            $await($(document).readyAsync());
            
            while (true) {
            
                $await(Wind.Async.onEvent($("#btnSearch").get(0), "click"));
                
                $('#result').empty();
                var keyword = encodeURIComponent($("#txtKeyword").val());
                
                var result = $await($.ajaxAsync({
                    url: 'http://api.t.sina.com.cn/trends/statuses.json?trend_name=' + keyword + '&source=3355748460',
                    dataType: "jsonp"
                }));

                $.each(result.data, function () {
                    $('#result').append('<li>' + this.text + '</li>');
                });
            }
        }));
        
        goAsync().start();
    