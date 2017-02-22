 angular.module('myapp.Home',[])

 .controller('HomeCtrl',function ($dialogs, $scope,$rootScope,$http,$location,Tradeworker){
  //$rootScope.isLogged = false;
  Tradeworker.getAll()
  .then(function (data) {
  	console.log(data);
    $scope.tradeworkers = data;
    console.log($scope.tradeworkers)
  })
  .catch(function (error) {
    console.log(error);
  });

  $scope.sendMessage = function(workerId){
      $rootScope.workerId=workerId;
     dlg = $dialogs.create('./app/home/sendMessage/sendMessage.html','sendMessageCtrl',{},{key: false,back: 'static'});
  }
})