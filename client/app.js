 angular.module('myapp',[
 	'myapp.Home',
 	'myapp.User',
	'myapp.Tradeworker',
	'myapp.Profile',
	'myapp.Messages',
	'myapp.services',
	'ngRoute'
	])

.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	// .when('/customerSignUp',{
	// 	templateUrl:'app/user/signup.html',                   
	// 	controller:'UserController'                  
	// })
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
	
}).factory('Auth', function ($http, $location, $window, $rootScope) {

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
  	console.log('gfaklsfjlkashflkSHFDklsfhl');
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
.run(function ($rootScope, $location, Auth,) {
	$rootScope.isLogged = false;
	var goTo;
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
  	//console.log(Auth.isAuth());
    if (next.$$route && ( next.$$route.originalPath === "/profile" || next.$$route.originalPath === '/messages' ) && !Auth.isAuth()) {
    	console.log('hellooooooooooooooo');
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
