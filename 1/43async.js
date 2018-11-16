

    (function(imageId){

        // Randomly generate tracker namespace to prevent clashes
        var rnd = Math.random().toString(36).substring(2);

        ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//d1fc8wv8zag5ca.cloudfront.net/2.9.2/sp.js","adTracker"));

        window.adTracker('newTracker', rnd, 'd3rkrsqld9gmqf.cloudfront.net', {
            'encodeBase64': false
        });

        window.adTracker('trackAdImpression:' + rnd, 

            '67965967893',            // impressionId
            'cpa',                    // costModel - 'cpa', 'cpc', or 'cpm'            
            10,                       // cost - requires costModel
            'http://www.example.com', // targetUrl
            '23',                     // bannerId
            '7',                      // zoneId
            '201',                    // advertiserId
            '12'                      // campaignId
        );

        function clickHandler() {
            window.adTracker('trackAdClick:' + rnd, 

                'http://www.example.com',      // targetUrl
                '12243253',                    // clickId
                'cpm',                         // costModel                
                0.5,                           // cost
                '23',                          // bannerId
                '7',                           // zoneId
                '67965967893',                 // impressionId - the same as in trackAdImpression
                '201',                         // advertiserId
                '12'                           // campaignId
            );

            var button = document.createElement('button');
            button.innerHTML = 'Click for an ad conversion';
            document.body.appendChild(button);
            button.onclick = function() {

                window.adTracker('trackAdConversion:' + rnd, 

                    '743560297',       // conversionId
                    'cpm',                         // costModel
                    10,                // cost
                    'ecommerce',       // category
                    'purchase',        // action
                    '',                // property
                    99,                // initialValue - how much the conversion is initially worth
                    '201',             // advertiserId
                    '12'               // campaignId
                );

            }
        }

        document.getElementById(imageId).addEventListener('click', clickHandler);

    }('banner1'));
     