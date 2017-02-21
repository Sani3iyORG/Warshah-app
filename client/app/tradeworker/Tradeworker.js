 angular.module('myapp.Tradeworker',[])

 .controller('TradeworkerContr',function ($scope, $rootScope, $http, $location, Tradeworker, Auth){
  
  $scope.addhandworker = function(){
    console.log($scope.tradeworker);
    Tradeworker.insert($scope.tradeworker)
    .then(function (data) {
      Auth.saveToken(data.token);
      $rootScope.isLogged = true;
      $location.path('/profile');
      console.log(data)
    })
    .catch(function (error) {
      alert(error.data.error);
    });
  }

})