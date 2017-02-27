 angular.module('myapp.Home', ['ui.bootstrap'])

 .controller('HomeCtrl', function($dialogs, $scope, $rootScope, $http, $location, Tradeworker) {
  $scope.slid_myInterval = 2500;
  $scope.images_slides = [
  {
    image_name: 'image/cover1.jpg',
  },
  {
    image_name: 'image/cover2.jpg',
  },
  {
    image_name: 'image/cover3.jpg',
  },
  {
    image_name: 'image/cover4.jpg',
  },
  ];

  Tradeworker.getAll()
  .then(function(data) {
    $scope.tradeworkers = data;
    $scope.tradeworkers.flag= false;
  })
  .catch(function(error) {
    console.log(error);
  });

  $scope.details =function(worker) {
    worker.flag= !worker.flag;
  };
  $scope.sendMessage = function(workeremail) {
    $rootScope.email=workeremail;
    dlg = $dialogs.create('./app/home/sendMessage/sendMessage.html', 'sendMessageCtrl', {}, {key: false, back: 'static'});
  };
});
