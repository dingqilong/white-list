
            //run specs and add reporter
            var reporter = new jasmine.HtmlReporter,
                env = jasmine.getEnv();
            env.specFilter = function(spec){
                return reporter.specFilter(spec)
            };
            env.addReporter(reporter);
            env.execute();
        