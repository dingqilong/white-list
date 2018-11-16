

      angular
        .module('myapp', ['algoliasearch', 'ngSanitize'])
        .controller('SearchCtrl', ['$scope', 'algolia', function($scope, algolia) {

          // Replace the following values by your ApplicationID and ApiKey.
          var client = algolia.Client('latency', '6be0576ff61c053d5f9a3225e2a90f76');

          // Replace the following value by the name of the index you want to query.
          var index = client.initIndex('contacts');

          $scope.search = {
            'query' : '',
            'hits' : []
          };

          $scope.$watch('search.query', function() {
            index.search($scope.search.query)
              .then(function searchSuccess(content) {
                console.log(content);
                // add content of search results to scope for display in view
                $scope.search.hits = content.hits;
              }, function searchFailure(err) {
                console.log(err);
            });
          });
        }]);

    