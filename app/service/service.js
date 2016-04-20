var myServ = angular.module('myService',[]);

myServ.service('myappService',function($http){

this.getCustomers= function(){
	
								return $http.get('json/customer.json', { cache: true }).then(function (response) {
								
								return response.data;
								
            });	
			
								}
						  
});

		 
				 
				 
				 