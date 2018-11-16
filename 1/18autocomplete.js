
      /**
       * This example uses the raw JavaScript client and autocomplete.js.
       * If you plan on building a dropdown UI, we encourage you to use this library.
       * It integrates really well with Algolia and also handle custom templating, keyboard navigation and a few other goodies.
       * https://github.com/algolia/autocomplete.js
      **/

      $(document).ready(function() {
        // Replace the following values by your ApplicationID and ApiKey.
        var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
        // Replace the following value by the name of the index you want to query.
        var index = client.initIndex('contacts');

        // basic autocomplete
        $('#autocomplete-algolia').autocomplete(null, {
          source: $.fn.autocomplete.sources.hits(index),
          displayKey: 'email'
        });

        // with a template and highlighting
        var template = Hogan.compile('<picture><img src="{{{image_url}}}" /></picture>' +
          '<div>{{{_highlightResult.email.value}}}</div>' +
          '<div class="text-right"><small>{{{_highlightResult.name.value}}}</span></div>');
        $('#autocomplete-algolia-template').autocomplete(null, {
          source: $.fn.autocomplete.sources.hits(index, {hitsPerPage: 10}),
          displayKey: 'email',
          templates: {
            suggestion: function(hit) {
              return template.render(hit);
            }
          }
        });
      });
    