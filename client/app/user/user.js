 angular.module('myapp.User',[])

.controller('UserController',function ($scope, $rootScope, $http,$location,User, Auth){
	$scope.user = {};
	$scope.signupuser={};
	$scope.ifuser=true;

	$scope.signin = function () {
		User.signin($scope.user)
		.then(function (data) {
			console.log(data);
			$scope.ifuser=false;
			Auth.saveToken(data.token);
			$rootScope.isLogged = true;
			$location.path('/profile');
			//$window.location.reload();
		})
		.catch(function (error) {
			console.log(error);
			$scope.ifuser=false;
			$scope.email="";
			$scope.password="";
		})
	}

 	$scope.signup = function (newUser) {
        User.signup(newUser)
        .then(function (user) {
            $scope.signin({
                username:newUser.username,
                password:newUser.password
            });
        })
        .catch(function (error) {
        	console.log(error);
            console.log("user already exist");
        })
    }
})


   



	    