
    require({
            baseUrl: "./",
            paths: {
                require: "../../require"
            }
        },
        ["http://search.twitter.com/trends/current.json?callback=define"],
        function (trends) {
            console.log(trends);
        }
    );
    