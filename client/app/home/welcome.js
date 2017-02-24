 angular.module('myapp.Home',[])

 .controller('HomeCtrl',function ($dialogs, $scope,$rootScope,$http,$location,Tradeworker){
  //$rootScope.isLogged = false;
  Tradeworker.getAll()
  .then(function (data) {
    $scope.tradeworkers = data; 
     $scope.tradeworkers.flag= false
  })
  .catch(function (error) {
    console.log(error);
  });

  $scope.details =function(worker){
    worker.flag= !worker.flag;
  }
  $scope.sendMessage = function(workeremail){
      $rootScope.email=workeremail;
     dlg = $dialogs.create('./app/home/sendMessage/sendMessage.html','sendMessageCtrl',{},{key: false,back: 'static'});
  }
})