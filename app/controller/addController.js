var addCtrl = angular.module('addCtrl',['myService']);


addCtrl.controller('addController',['$scope','myappService',function($scope,myappService){
	
	
	$scope.customers=myappService.getCustomers();
				 
				 
	$scope.add=	function(){
					$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt})
					$scope.nameTxt="";
					$scope.locationTxt="";
						  }
						  
	

}]);

	 
				 
				 
				 
				 