 angular.module('myapp.user',[])

.controller('UserController',function ($scope,$http,$location,User){
	$scope.user = {};
	 $scope.ifuser=true;

	$scope.signin = function () {
		User.signin($scope.user)
		.then(function (data) {
			$scope.ifuser=false;
			$location.path('/');
			//$window.location.reload();
		})
		.catch(function (error) {
			console.log(error);
			$scope.ifuser=false;
			$scope.username="";
			$scope.password="";
		})
	}

 	$scope.signup = function (newUser) {
        newUser.username = $scope.username;
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


   



	    