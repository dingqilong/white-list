
      /* Title: Builder
       Description: constructs complex objects by separating construction and representation
       */
      function getBeerById(id, callback) {
        // Make request for beer by ID, then return the beer data.
        asyncRequest('GET', 'beer.uri?id=' + id, function (resp) {
          // callback response
          callback(resp.responseText);
        });
      }
      var el = document.querySelector('#test');
      el.addEventListener('click', getBeerByIdBridge, false);
      function getBeerByIdBridge(e) {
        getBeerById(this.id, function (beer) {
          console.log('Requested Beer: ' + beer);
        });
      }
      // reference
      // http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/#builderpatternjquery
    