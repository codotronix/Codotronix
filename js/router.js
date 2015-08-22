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
	           .when('/projects', {
	              templateUrl: 'partials/projects.html',
	              controller: 'projectsCtrl'
	           })/*
	           .when('/projects/:postID', {
	              templateUrl: 'partials/projectPage.html',
	              controller: 'projectPageCtrl'
	           })*/
	           .when('/', {
	           		redirectTo: '/projects'
	           })
	           .otherwise({
	           		redirectTo: '/'
	           });
	    }
	]);
