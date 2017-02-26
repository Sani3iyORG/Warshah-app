angular.module('myapp.services', [])
.factory('User', function($http, $location, $window) {
  let signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user,
    }).then(function(resp) {
      return resp.data;
    });
  };

  let signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user,
    }).then(function(resp) {
      return resp.data;
    });
  };

  let signout = function() {
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    signout: signout,
  };
})

.factory('Tradeworker', function($http, $location) {
  let worker = {};

  let insert = function(Tradeworker) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: Tradeworker,
    }).then(function(resp) {
      return resp.data;
    });
  };

  let update = function(Tradeworker) {
    return $http({
      method: 'POST',
      url: '/api/updateProfile',
      data: Tradeworker,
    }).then(function(resp) {
      return resp.data;
    });
  };

  let fetch = function() {
    return $http({
      method: 'GET',
      url: '/api/getProfile',
    }).then(function(resp) {
      return resp.data;
    });
  };

  let getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/all',
    }).then(function(resp) {
      return resp.data;
    });
  };

  let deactive = function() {
    return $http({
      method: 'POST',
      url: '/api/deactive',
    }).then(function(resp) {
      return resp;
    });
  };

  return {
    worker: worker,
    insert: insert,
    getAll: getAll,
    update: update,
    fetch: fetch,
    deactive: deactive,
  };
});
