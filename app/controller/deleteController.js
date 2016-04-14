var removeCtrl = angular.module('removeCtrl',['myService']);


removeCtrl.controller('removeController',['$scope','myappService',function($scope,myappService){

	$scope.customers=myappService.getCustomers();
				 

	$scope.remove=function(id){
							$scope.customers.splice(id,1);							
							}					
						  

}]);

	 
				 
				 
				 
				 