angular.module('myapp.Profile',[])

 .controller('ProfileCtrl',function ($scope, $rootScope, $http, $location, Tradeworker, Auth){
  
  $rootScope.isLogged = true;
    $scope.updateHandWorker = function(){
    console.log($scope.tradeworker);
    Tradeworker.update($scope.tradeworker)
    .then(function (data) {
      alert(data.message);
    })
    .catch(function (error) {
      alert(error.data.error);
    });
  }
})