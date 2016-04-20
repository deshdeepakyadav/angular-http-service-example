var showDataCtrl = angular.module('showDataCtrl',[]);


showDataCtrl.controller('showDataController',['$scope','load',function($scope,load){
	
	$scope.customers=load;	
  

}]);

showDataCtrl.resolve={
						load: ['myappService',function(myappService) {
						return myappService.getCustomers();
						}]
					 }	 
				 
				 
				 
				 