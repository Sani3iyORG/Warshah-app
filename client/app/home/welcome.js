 angular.module('myapp.Home',[])

 .controller('HomeCtrl',function ($scope,$http,$location,Tradeworker){
  Tradeworker.getAll()
  .then(function (data) {
    $scope.tradeworkers = data;
    console.log($scope.tradeworkers)
  })
  .catch(function (error) {
    console.log(error);
  });
})