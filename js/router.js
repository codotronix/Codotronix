//get a reference of the mainApp
var mainApp = angular.module('mainApp');

//Config the router
mainApp.config(['$routeProvider',
	    function ($routeProvider) {
	        $routeProvider.
	           when('/home', {
	              templateUrl: 'partials/home.html',
	              controller: 'homeCtrl'
	           })
	           .when('/about', {
	              templateUrl: 'partials/about.html',
	              controller: 'aboutCtrl'
	           })
	           .when('/', {
	           		redirectTo: '/home'
	           })
	           .otherwise({
	           		redirectTo: '/'
	           });
	    }
	]);