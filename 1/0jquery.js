
      function searchCallback(content) {
        if (content.query !== $('#q').val()) {
          // do not take out-dated answers into account
          return;
        }

        if (content.hits.length === 0) {
          // no results
          $('#hits').empty();
          return;
        }

        // Scan all hits and display them
        var html = '';
        for (var i = 0; i < content.hits.length; ++i) {
          var hit = content.hits[i];

          html += '<div class="hit">';
          for (var attribute in hit._highlightResult) {
            html += '<div class="attribute">' +
              '<span>' + attribute + ': </span>' +
              hit._highlightResult[attribute].value +
              '</div>';
          }
          html += '</div>';
        }
        $('#hits').html(html);
      }

      $(document).ready(function() {
        var $inputfield = $('#q');

        // Replace the following values by your ApplicationID and ApiKey.
        var client = $.algolia.Client('latency', '6be0576ff61c053d5f9a3225e2a90f76');
        // Replace the following value by the name of the index you want to query.
        var index = client.initIndex('contacts');

        $inputfield.keyup(function() {
          index.search($inputfield.val(), { hitsPerPage: 5 })
            .done(searchCallback)
            .fail(function(content) { console.log('Error', content); });
        }).focus().closest('form').on('submit', function() {
          // on form submit, store the query string in the anchor
          location.replace('#q=' + encodeURIComponent($inputfield.val()));
          return false;
        });

        // check if there is a query in the anchor: http://example.org/#q=my+query
        if (location.hash && location.hash.indexOf('#q=') === 0) {
          var q = decodeURIComponent(location.hash.substring(3));
          $inputfield.val(q).trigger('keyup');
        }
      });
    