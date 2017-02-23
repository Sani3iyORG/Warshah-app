
angular.module('myapp.Profile',['myapp.Update'])

.controller('ProfileCtrl',function ($scope, $dialogs, $http, $rootScope, Tradeworker){
  $rootScope.isLogged = true;
  $scope.getTradeWorker = function(){  
    Tradeworker.fetch()
    .then(function(data){
      $scope.tradeworker = data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  $scope.openUpdate = function(){
    dlg = $dialogs.create('./app/profile/updateProfile/updateProfile.html','updateProfileCtrl',{},{key: false, backdrop: true});
  }
  // $scope.getTradeWorker();
})