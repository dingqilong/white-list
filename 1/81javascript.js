
    var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
    var index = client.initIndex('contacts');

    index.search('Atlenta', function(err, results) {
      if (err) {
        throw err;
      }

      console.log('We got `' + results.nbHits + '` results');
      console.log('Here is the first one: ', results.hits[0]);
    });
  