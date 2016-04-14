var myDataApp = angular.module('dataApp',['ngRoute','showDataCtrl','addCtrl','updateCtrl','removeCtrl','myService']);
	
	myDataApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		  $routeProvider.
				when('/',{
				templateUrl: 'partial/list.html',
				controller: 'showDataController',
				resolve: {
						load: function(myappService) {
						return myappService;
						}}
				}).
				when('/add',{
				templateUrl: 'partial/add.html',
				controller: 'addController'				
				}).
				when('/modify',{
				templateUrl: 'partial/modify.html',
				controller: 'updateController'				
				}).
				when('/delete',{
				templateUrl: 'partial/delete.html',
				controller: 'removeController'				
				}).
				otherwise({redirectTo: '/'});
				$locationProvider.html5Mode(true);

	}]);