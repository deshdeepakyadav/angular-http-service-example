var myServ = angular.module('myService',[]);

myServ.service('myappService',function($http){
/*var customers=[
					{"name":"Desh","location":"Noida"},
					{"name":"Deepak","location":"Delhi"},
					{"name":"Ajay","location":"Noida"},
					{"name":"Shiv","location":"Delhi"},
					{"name":"Manjeet","location":"Chandigarh"}
			  ];*/
/*var promise = $http.get('json/customer.json', { cache: true }).then(function (response) {
                return response.data;
            });		*/

this.getCustomers= function(){
								return $http.get('json/customer.json', { cache: true }).then(function (response) {
                return response.data;
            });	
								}
	


								//return customers;
								/*var dataObj =  $http.get("json/customer.json")
								.then(function(response) {
								return response;
								});
								console.log(dataObj);
								return dataObj;*/
							//}

						  
});

		 
				 
				 
				 