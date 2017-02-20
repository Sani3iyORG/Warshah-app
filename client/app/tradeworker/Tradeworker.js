 angular.module('myapp.Tradeworker',[])

 .controller('TradeworkerContr',function ($scope,$http,$location,Tradeworker){
  
  $scope.addhandworker = function(){
    console.log($scope.tradeworker);
    Tradeworker.insert($scope.tradeworker)
    .then(function (data) {
      $location.path('/welcome');
      console.log(data);
    })
    .catch(function (error) {
      alert(error.data.error);
    });
  }

})