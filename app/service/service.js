var myServ = angular.module('myService',[]);

myServ.service('myappService',function(){
var customers=[
					{"name":"Desh","location":"Noida"},
					{"name":"Deepak","location":"Delhi"},
					{"name":"Ajay","location":"Noida"},
					{"name":"Shiv","location":"Delhi"},
					{"name":"Manjeet","location":"Chandigarh"}
			  ];
			

this.getCustomers= function(){
								return customers;
							}

						  
});

		 
				 
				 
				 