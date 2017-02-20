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
	.otherwise({
		redirectTo:'/welcome'
	})
	
})