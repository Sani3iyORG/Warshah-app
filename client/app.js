 angular.module('myapp',[
 	'myapp.Home',
 	'myapp.User',
	'myapp.Tradeworker',
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
		templateUrl: 'app/messages/messages.html'
	})
	.when('/profile',{
		templateUrl: 'app/profile/profile.html'
	})
	.otherwise({
		redirectTo:'/welcome'
	})
	
}).factory('Auth', function ($http, $location, $window) {

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
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
