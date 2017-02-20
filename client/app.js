 angular.module('Warshah',['Warshah.UserController',
	'Warshah.TradeworkerContr',
	'Warshah.AdsCtrl',
	'ngRoute',
	'Warshah.services'
	])

.config(function($routeProvider){
	$routeProvider.when('/adduser',{
		templateUrl:'app/user/signup.html',                   
		controller:'UserController'                  
	})
	.when('/addTradeworker',{
		templateUrl:'app/tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
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