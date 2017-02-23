 angular.module('myapp',[
 	'myapp.Home',
 	'myapp.User',
	'myapp.Tradeworker',
	'myapp.Profile',
  'myapp.Update',
	'myapp.Messages',
	'myapp.services',
  'myapp.sendMessage',
	'ngRoute'
	])

.config(function($routeProvider, $locationProvider, $httpProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/tradeworkerSignup',{
		templateUrl:'app/tradeworker/tradeworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/signin',{
	templateUrl:'app/user/login.html',
	controller:'UserController'                 
	})

	.when('/welcome',{
		templateUrl:'app/home/welcome.html',
		controller: 'HomeCtrl'              
	})
	.when('/messages',{
		templateUrl: 'app/messages/messages.html',
		controller: 'MessagesCtrl'
	})
	.when('/profile',{
		templateUrl: 'app/profile/profile.html',
		controller: 'ProfileCtrl'
	})
	.otherwise({
		redirectTo:'/welcome'
	})
	
$httpProvider.interceptors.push('AttachTokens');


})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('tradeworker');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})


.factory('Auth', function ($http, $location, $window, $rootScope) {

  var auth = {};
  auth.saveToken = function (token){
    $window.localStorage['tradeworker'] = token;
  };

  auth.getToken = function (){
    return $window.localStorage['tradeworker'];
  };

  auth.isAuth = function () {
    return !!$window.localStorage.getItem('tradeworker');
  };

  auth.currentUser = function(){
    if(auth.isAuth()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.username;
    }
  };

  auth.logOut = function(){
  	$rootScope.isLogged = false;
    $window.localStorage.removeItem('tradeworker');
  };

  auth.getProfile = function(){
    return $http({
      method: 'GET',
      url: '/profile'
    }).success(function(resp){
      return resp;
    }).error(function (data, status, header, config) {
        alert('somt thing went wrong');
    });
  };

  


  return auth;  
})
.controller('myappCtrl',function ($scope, $rootScope, $http, $location, User, Auth){
	$scope.logOut = function(){
		Auth.logOut();
	}
})
.run(function ($rootScope, $location, Auth) {
	$rootScope.isLogged = false;
	var goTo;
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
  	//console.log(Auth.isAuth());
    if (next.$$route && ( next.$$route.originalPath === "/profile" || next.$$route.originalPath === '/messages' ) && !Auth.isAuth()) {
    	//console.log('hellooooooooooooooo');
      $location.path('signin');
    } else {
    	if(next.$$route.originalPath){
    		$location.path(next.$$route.originalPath);
    	}else{
    		$location.path('/welcome');
    	}
    	
    }
  });
});
