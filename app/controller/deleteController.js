var removeCtrl = angular.module('removeCtrl',[]);


removeCtrl.controller('removeController',['$scope','load',function($scope,load){

	$scope.customers=load;
				 

	$scope.remove=function(id){
							$scope.customers.splice(id,1);							
							}					
						  

}]);

removeCtrl.resolve={
						load: ['myappService',function(myappService) {
						return myappService.getCustomers();
						}]
					 }	
				 
				 
				 
				 