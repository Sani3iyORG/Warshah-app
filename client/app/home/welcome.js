 angular.module('myapp.Home',[])

 .controller('HomeCtrl',function ($scope,$rootScope,$http,$location,Tradeworker){
  //$rootScope.isLogged = false;
  Tradeworker.getAll()
  .then(function (data) {
    $scope.tradeworkers = data;
    console.log($scope.tradeworkers)
  })
  .catch(function (error) {
    console.log(error);
  });
})