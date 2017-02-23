
angular.module('myapp.Profile',[])

.controller('ProfileCtrl',function ($scope, $dialogs, $http, $rootScope, Tradeworker){
  $rootScope.isLogged = true;
  Tradeworker.fetch()
  .then(function(data){
    $scope.tradeworker = {};
    $scope.tradeworker = data;
  })
  .catch(function (error) {
    console.log(error);
  });

  $scope.openUpdate = function(){
    dlg = $dialogs.create('./app/profile/updateProfile/updateProfile.html','updateProfileCtrl',{},{key: false, backdrop: true});
  }

 //  $scope.openUpdate = function () {
 //   $Modal.open({
 //     templateUrl: 'profile/updateProfile/updateProfile.html',
 //     controller: 'updateProfileCtrl',
 //   });
 // }

})