 angular.module('myapp.Tradeworker', [])

 .controller('TradeworkerContr', function($scope, $rootScope, $http, $location, Tradeworker, Auth) {
  $scope.addhandworker = function() {
    Tradeworker.insert($scope.tradeworker)
    .then(function(data) {
      Auth.saveToken(data.token);
      $rootScope.isLogged = true;
      $location.path('/profile');
    })
    .catch(function(error) {
      alert(error.data.error);
    });
  };
});
