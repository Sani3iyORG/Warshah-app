angular.module('myapp.Update', ['ui.bootstrap', 'dialogs'])

.controller('updateProfileCtrl', function($timeout, $dialogs, $scope, $route, $rootScope, $http, $location, $modalInstance, Tradeworker) {
  $rootScope.isLogged = true;
  $scope.tradeworker = {};
  $scope.cancel = function() {
    $modalInstance.dismiss('canceled');
  };
  $scope.updateHandWorker = function() {
    Tradeworker.update($scope.tradeworker)
    .then(function(resp) {
      $route.reload();
      alert(resp.message);
    })
    .catch(function(error) {
      alert(error.data.error);
      // console.error(error.data);
    });
    $modalInstance.close();
  };
});
