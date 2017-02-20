 angular.module('myapp',[
 	'myapp.User',
	'myapp.Tradeworker',
	'myapp.services',
	'ngRoute'
	])

.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/customerSignUp',{
		templateUrl:'app/user/signup.html',                   
		controller:'UserController'                  
	})
	.when('/tradeworkerSignup',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/signin',{
	templateUrl:'app/user/login.html',
	controller:'UserController'                 
	})

	.when('/welcome',{
		templateUrl:'app/welcome.html'              
	})
	.when('/getTradeworker',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.otherwise({
		redirectTo:'/welcome'
	})
	
})