angular.module('myapp.Profile',[])

 .controller('ProfileCtrl',function ($scope, $rootScope, $http, $location, Tradeworker, Auth){
  
  $rootScope.isLogged = true;
})