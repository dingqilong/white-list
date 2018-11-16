
      /**
       * This example uses the raw JavaScript client to build an instant search result page.
       * If you plan on building such a UI, we strongly encourage you to try our instantsearch.js library instead.
       * It is a set of UI widgets that you can mix and match to build instant search result pages, including facet filtering, 
       * highlighting and custom themes.
       * More information, examples and documentation on https://community.algolia.com/instantsearch.js/
      **/

      $(document).ready(function() {
        var refinements = {};
        var $inputfield = $('#q');
        // Replace the following values by your ApplicationID and ApiKey.
        var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
        // Replace the following value by the name of the index you want to query.
        var index = client.initIndex('bestbuy');

        $inputfield.keyup(function() {
          search();
        }).focus();

        window.toggleRefine = function(refinement) {
          refinements[refinement] = !refinements[refinement];
          search();
        };

        function search() {
          var filters = [];
          for (var refinement in refinements) {
            if (refinements[refinement]) {
              filters.push(refinement);
            }
          }
          index.search($inputfield.val(), {
            facets: '*', facetFilters: filters
          }, searchCallback);
        }

        function searchCallback(err, content) {
          if (err) {
            // error
            return;
          }

          if (content.query != $inputfield.val()) {
            // do not consider out-dated queries
            return;
          }
          if (content.hits.length == 0 || $.trim(content.query) === '') {
            // no results
            $('#hits').empty();
            $('#facets').empty();
            return;
          }

          // Scan all hits and display them
          var hits = '';
          for (var i = 0; i < content.hits.length; ++i) {
            var hit = content.hits[i];

            hits += '<div class="hit">';
            for (var attribute in hit._highlightResult) {
              hits += '<div class="attribute">' +
                '<span>' + attribute + ': </span>' +
                hit._highlightResult[attribute].value +
                '</div>';
            }
            hits += '</div>';
          }
          $('#hits').html(hits);

          // Scan all facets and display them
          var facets = '';
          for (var facet in content.facets) {
            facets += '<h4>' + facet + '</h4>';
            facets += '<ul>';
            var values = content.facets[facet];
            for (var value in values) {
              var refinement = facet + ':' + value;
              facets += '<li class="' + (refinements[refinement] ? 'refined' : '') + '">' +
                  '<a href="#" onclick="toggleRefine(\'' + refinement + '\'); return false">' + value + '</a> (' + values[value] + ')' +
                '</li>';
            }
            facets += '</ul>';
          }
          $('#facets').html(facets);
        }
      });
    