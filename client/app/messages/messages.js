angular.module('myapp.Messages',[])

 .controller('MessagesCtrl',function ($scope, $rootScope, $http, $location, Tradeworker, Auth){
  
  $rootScope.isLogged = true;
  $scope.flag= false;
  $scope.users=[];
  $http({
  	method: 'GET',
  	url: '/api/getmsg'
  }).then(function(mesg){
  		console.log('im here')
      console.log(mesg.data)
    if(mesg.length ===0){
  		$scope.flag=false;
  	}
  	else
  		$scope.user = mesg;
  }).catch(function(error){
  	alert(error);
  })

  $scope.responseToUser =function(){

  }

  // Tradeworker.getAll()
  // .then(function (data) {
  //   $scope.tradeworkers = data;
  //   console.log($scope.tradeworkers)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
})