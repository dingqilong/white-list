

        ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d1fc8wv8zag5ca.cloudfront.net/2.9.2/sp.js","snowplow"));

        window.snowplow('newTracker', 'cf', 'd3rkrsqld9gmqf.cloudfront.net', { // Initialise a tracker
          encodeBase64: false, // Default is true
          appId: 'CFe23a', // Site ID can be anything you want. Set it if you're tracking more than one site in this account
          platform: 'mob',
          contexts: {
            webPage: true,
            gaCookies: true,
            performanceTiming: true
          }
        });

        window.snowplow('setUserId', 'alex 123'); // Business-defined user ID
        //window.snowplow('setUserIdFromLocation', 'id'); // To test this, reload the page with ?id=xxx
        //window.snowplow('setUserIdFromCookie', '_sp_id.4209') // Test this using Firefox because Chrome doesn't allow local cookies.
        window.snowplow('setCustomUrl', '/overridden-url/'); // Override the page URL
        window.snowplow('enableActivityTracking', 10, 10); // Ping every 10 seconds after 10 seconds
        window.snowplow('enableLinkClickTracking', {blacklist: ['barred']}, true); // Track clicks on links whose class is not "barred"
        // window.snowplow('trackPageView', 'Async Test'); // Track the page view with custom title
        window.snowplow('trackPageView', null, [ // Auto-set page title; add page context
          {
            schema: "iglu:com.example_company/page/jsonschema/1-2-1",
            data: {
              pageType: 'test',
              lastUpdated: new Date(2014,1,26)
            }
          },
          {
            schema: "iglu:com.example_company/user/jsonschema/2-0-0",
            data: {
              userType: 'tester',
            }
          }
        ]);

    