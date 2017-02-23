angular.module('myapp.sendMessageEmail',['ui.bootstrap','dialogs'])

 .controller('sendMessageECtrl',function ($modalInstance, $timeout, $dialogs, $scope, $rootScope, $http,$location,Tradeworker){
 	$scope.user= {};
 	$scope.cancel = function(){
    $modalInstance.dismiss('canceled');  
  };

  $scope.sendEmailMessage = function(){

  	$scope.user.email = $rootScope.emailu;
    $scope.user.name = $rootScope.usernameu;
  	$http({
  		method: 'POST',
  		url:'api/sendemail',
  		data: $scope.user

  	}).then(function(resp){
  		alert(resp.data.Message)
  	})
  	$modalInstance.dismiss('canceled');  
  };

 })
 .run(['$templateCache',function($templateCache){
  $templateCache.put('./app/messages/sendResponseEmail/sendResponseEmail.html',
   '<div class="modal">   <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header">                    <h4 class="modal-title">                      <span class="glyphicon glyphicon-star"></span> send message                        </h4>               </div>      <div class="modal-body">          <ng-form name="nameDialog" novalidate role="form">           <div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.msg.$dirty && nameDialog.msg.$invalid]">                 <label class="control-label" for="msg">Message:</label>                     <input type="text" class="form-control" name="msg" id="username" ng-model="user.msg" ng-keyup="hitEnter($event)" required>                   </div>                </ng-form>        </div>        <div class="modal-footer">        <button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>     <button type="button" class="btn btn-primary" ng-click="sendEmailMessage()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Send Message</button>     </div>     </div>    </div>   </div>');
}]);