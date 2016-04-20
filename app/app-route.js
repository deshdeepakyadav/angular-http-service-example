var myDataApp = angular.module('dataApp',['ngRoute','showDataCtrl','addCtrl','updateCtrl','removeCtrl','myService']);
	
	myDataApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		  $routeProvider.
				when('/',{
				templateUrl: 'partial/list.html',
				controller: 'showDataController',
				resolve: showDataCtrl.resolve
				}).
				when('/add',{
				templateUrl: 'partial/add.html',
				controller: 'addController',	
				resolve: addCtrl.resolve
				}).
				when('/modify',{
				templateUrl: 'partial/modify.html',
				controller: 'updateController',
				resolve: updateCtrl.resolve				
				}).
				when('/delete',{
				templateUrl: 'partial/delete.html',
				controller: 'removeController',
				resolve: removeCtrl.resolve					
				}).
				otherwise({redirectTo: '/'});
				$locationProvider.html5Mode(true);
				

	}]);