

        // Load sp.js
        ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d1fc8wv8zag5ca.cloudfront.net/2.9.2/sp.js","new_name_here"));

        window.new_name_here('newTracker', 'cf', 'd3rkrsqld9gmqf.cloudfront.net', {
          encodeBase64: false,
          appId: 'CFe23a',
          platform: 'mob',
          cookieName: '_cf_3489563', // Cookie names should be unique to prevent mix-ups
          contexts: {
            webPage: true,
            performanceTiming: true
          }
        });

        // This second tracker namespace could have a different collector as its endpoint
        window.new_name_here('newTracker', 'uri', 'collector.acme-company.com', {
          encodeBase64: true,
          appId: '8D4920',
          userFingerprintSeed: 857463967, // Sets a custom seed for the "uri" tracker to generate the user fingerprint; the "cf" tracker will still use the default fingerprint
          cookieName: '_uri_73457324',
        });

        window.new_name_here('setUserId', 'alex 123'); // Business-defined user ID
        //window.new_name_here('setUserIdFromLocation', 'id'); // To test this, reload the page with ?id=xxx
        //window.new_name_here('setUserIdFromCookie', '_sp_id.4209') // Test this using Firefox because Chrome doesn't allow local cookies.
        window.new_name_here('setCustomUrl', '/overridden-url/'); // Override the page URL
        window.new_name_here('enableActivityTracking', 10, 10); // Ping every 10 seconds after 10 seconds
        window.new_name_here('enableLinkClickTracking:cf', {whitelist: ['inbound', 'out']}, true, true); // Track clicks on links whose class is not "barred"
        window.new_name_here('enableLinkClickTracking:uri', {
          filter: function(link){
            return link.id === 'legal';
          }
        }, true);
        // window.new_name_here('trackPageView', 'Async Test'); // Track the page view with custom title
        window.new_name_here('trackPageView', null, [ // Auto-set page title; add page context
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

    