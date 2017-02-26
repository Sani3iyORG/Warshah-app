
angular.module('myapp.Profile', ['myapp.Update'])

.controller('ProfileCtrl', function($scope, $location, $dialogs, $http, $rootScope, Tradeworker, Auth) {
  $rootScope.isLogged = true;
  $scope.getTradeWorker = function() {
    Tradeworker.fetch()
    .then(function(data) {
      $scope.tradeworker = data;
    })
    .catch(function(error) {
      console.error(error.data.error);
    });
  };

  $scope.openUpdate = function() {
    dlg = $dialogs.create('./app/profile/updateProfile/updateProfile.html', 'updateProfileCtrl', {}, {key: false, backdrop: true});
  };

  $scope.deActivate = function() {
    Tradeworker.deactive()
    .then(function(resp) {
      Auth.logOut();
      $location.path('/welcome');
      console.log(resp.data);
    })
    .catch(function(error) {
      alert(error.data.error);
    });
  };
});
