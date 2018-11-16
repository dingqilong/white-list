

        ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d1fc8wv8zag5ca.cloudfront.net/2.9.2/sp.js","snowplow_1"));

        window.snowplow_1('newTracker', 'cf', 'd3rkrsqld9gmqf.cloudfront.net', { // Initialise a tracker
          encodeBase64: false, // Default is true
          appId: 'CFe23a', // Site ID can be anything you want. Set it if you're tracking more than one site in this account
          platform: 'mob',
          crossDomainLinker: function (link) {return link.id === 'legal'}, // Add duid and timestamp to the link with id "legal"
          contexts: {
            webPage: true,
            performanceTiming: true
          }
        });

        window.snowplow_1('setUserId', 'alex 123'); // Business-defined user ID
        //window.snowplow_1('setUserIdFromLocation', 'id'); // To test this, reload the page with ?id=xxx
        //window.snowplow_1('setUserIdFromCookie', '_sp_id.4209') // Test this using Firefox because Chrome doesn't allow local cookies.
        window.snowplow_1('setCustomUrl', '/overridden-url/'); // Override the page URL
        window.snowplow_1('enableActivityTracking', 10, 10); // Ping every 10 seconds after 10 seconds
        window.snowplow_1('enableLinkClickTracking', {blacklist: ['barred']}, true); // Track clicks on links whose class is not "barred"
        window.snowplow_1('enableGeolocationContext');
        window.snowplow_1('enableFormTracking', {
          forms: {
            whitelist: ['formclass']
          },
          fields: {
            blacklist: ['comments']
          }
        }); // Track changes to form fields and form submissions
        // window.snowplow_1('trackPageView', 'Async Test'); // Track the page view with custom title
        window.snowplow_1('trackPageView', null, [ // Auto-set page title; add page context
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

        // Callback executed once the tracker loads which logs the user fingerprint
        window.snowplow_1(function () {
          console.log(this.cf.getUserFingerprint());
        });

    