var addCtrl = angular.module('addCtrl',[]);


addCtrl.controller('addController',['$scope','load',function($scope,load){
	
	
	$scope.customers=load;
				 
				 
	$scope.add=	function(){
					$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt});
					$scope.nameTxt="";
					$scope.locationTxt="";
						  }

}]);

addCtrl.resolve={
						load: ['myappService',function(myappService) {
						return myappService.getCustomers();
						}]
					 }	 	 
				 
				 
				 
				 