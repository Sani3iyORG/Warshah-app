angular.module('myapp.Messages',[])

 .controller('MessagesCtrl',function ($scope, $rootScope, $http, $location, Tradeworker, Auth){
  
  $rootScope.isLogged = true;
  $scope.flag= false;
  $scope.users=[];

  $scope.intilize = function(){
     $http({
      method: 'GET',
      url: '/api/getmsg'
    }).then(function(mesg){
      if(mesg.length ===0){
        $scope.flag=false;
      } else{
        $scope.flag= true;
        $scope.users = mesg.data;
      console.log($scope.users)
      }
    }).catch(function(error){
        alert(error);
    })   
  }

 

  $scope.responseToUser =function(){

  }
})