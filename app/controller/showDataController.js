var showDataCtrl = angular.module('showDataCtrl',['myService']);


showDataCtrl.controller('showDataController',['$scope','myappService',function($scope,myappService){
	
	$scope.customers=myappService.getCustomers();
						  

}]);

	 
				 
				 
				 
				 