angular.module('myapp.Update',['ui.bootstrap','dialogs'])

.controller('updateProfileCtrl',function ($timeout, $dialogs, $scope, $rootScope, $http, $location, $modalInstance, Tradeworker){

  $rootScope.isLogged = true;
  $scope.tradeworker = {};
  $scope.updateHandWorker = function(){
    console.log($scope.tradeworker);
    Tradeworker.update($scope.tradeworker)
    .then(function (data) {
      alert(data.message);
    })
    .catch(function (error) {
      alert(error.data.error);
    });
    $modalInstance.close();
  }
})