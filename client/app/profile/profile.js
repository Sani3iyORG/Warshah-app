
angular.module('myapp.Profile',['myapp.Update',/*'ui.bootstrap'*/])

.controller('ProfileCtrl',function ($scope, $http, $rootScope, Tradeworker, /*$uibModal*/){
  $rootScope.isLogged = true;
  Tradeworker.fetch()
  .then(function(data){
    $scope.tradeworker = {};
    $scope.tradeworker = data;
  })
  .catch(function (error) {
    console.log(error);
  });
 //  $scope.openUpdate = function () {
 //   $uibModal.open({
 //     templateUrl: 'profile/updateProfile/updateProfile.html',
 //     controller: 'updateProfileCtrl',
 //   });
 // }

})