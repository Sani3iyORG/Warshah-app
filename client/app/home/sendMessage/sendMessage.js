angular.module('myapp.sendMessage', ['ui.bootstrap', 'dialogs'])

 .controller('sendMessageCtrl', function($modalInstance, $timeout, $dialogs, $scope, $rootScope, $http, $location, Tradeworker) {
 	$scope.user= {};
 	$scope.cancel = function() {
    $modalInstance.dismiss('canceled');
  };

  $scope.sendMessage = function() {
  	$scope.user.workeremail = $rootScope.email;
  	$http({
  		method: 'POST',
  		url: '/api/addmsg',
  		data: $scope.user,

  	}).then(function(resp) {
  		alert(resp.data);
  	});
  	$modalInstance.dismiss('canceled');
  };
 })
 .run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/home/sendMessage/sendMessage.html',
  	'<div class="modal">  	  <div class="modal-dialog">  	    <div class="modal-content">  	      <div class="modal-header">  	        <h4 class="modal-title">  	          <span class="glyphicon glyphicon-star"></span> send message   	        </h4>  	      </div>  	    <div class="modal-body">  	    <ng-form name="nameDialog" novalidate role="form">  	      <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]">  	        <label class="control-label" for="username">User Name:</label>  	        <input type="text" class="form-control" name="username" id="username" ng-model="user.user" ng-keyup="hitEnter($event)" required>  	        <span class="help-block">Enter your full name, first &amp; last.</span>  	      </div>  	      <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.userEmail.$dirty && nameDialog.userEmail.$invalid]">  	        <label class="control-label" for="userEmail">e-mail:</label>  	        <input type="text" class="form-control" name="userEmail" id="username" ng-model="user.userEmail" ng-keyup="hitEnter($event)" required>  	      </div>  	      <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.place.$dirty && nameDialog.place.$invalid]">  	        <label class="control-label" for="place">place:</label>  	        <input type="text" class="form-control" name="place" id="username" ng-model="user.place" ng-keyup="hitEnter($event)" required>  	      </div>  	      <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.phon.$dirty && nameDialog.phon.$invalid]">  	        <label class="control-label" for="phon">Phone Number:</label>  	        <input type="text" class="form-control" name="phon" id="username" ng-model="user.phon" ng-keyup="hitEnter($event)" required>  	      </div>  	      <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.msg.$dirty && nameDialog.msg.$invalid]">  	        <label class="control-label" for="msg">Message:</label>  	        <input type="text" class="form-control" name="msg" id="username" ng-model="user.msg" ng-keyup="hitEnter($event)" required>  	          	      </div>  	    </ng-form>  	  </div>  	  <div class="modal-footer">  	    <button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>  	    <button type="button" class="btn btn-primary" ng-click="sendMessage()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Send Message</button>  	  </div>  	</div> </div></div>');
}]);
