angular.module('myapp.services', [])
.factory('User', function ($http, $location, $window) { 
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    }).then(function (resp) {
      return resp.data;
    });
  }

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    }).then(function (resp) {
      return resp.data;
    });
  }

  var signout = function () {
    $location.path('/signin');
  }

  return {
    signin: signin,
    signup: signup,
    signout: signout
  }
})

.factory('Tradeworker',function ($http, $location) {

  var insert = function (Tradeworker) {
    return $http({
      method : 'POST',
      url : '/api/signup',
      data : Tradeworker
    }).then(function (resp) {
      return resp.data
    })
  }

  var update = function (Tradeworker) {
    return $http({
      method : 'POST',
      url : '/api/updateProfile',
      data : Tradeworker
    }).then(function (resp) {
      return resp.data
    })
  }

  var fetch = function() {
    return $http({
      method : 'GET',
      url : '/api/getProfile'
    }).then(function (resp) {
      return resp.data
    })
  }

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/api/all'
    }).then(function (resp) {
      return resp.data
    })
  }

  return {
    insert : insert,
    getAll : getAll,
    update : update,
    fetch : fetch
  }
})
