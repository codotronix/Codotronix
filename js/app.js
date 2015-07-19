/****** The Main App *************/
var mainApp = angular.module('mainApp', ['ngRoute']);

/****** The Main Controller *****/
mainApp.controller('mainCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {
	   $scope.topMenu = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3', 'Menu Item 4', 'Menu Item 5', 'Menu Item 6'];
      $scope.leftMenu = ['Side Item 1', 'Side Item 2', 'Side Item 3', 'Side Item 4', 'Side Item 5', 'Side Item 6'];
      $scope.classPageId = "loginPage";
      $scope.$on('pageChange', function () {
      $scope.classPageId = sharedVars.classPageId;
   }) 
}]);

/****** lets do the routing ***********/


/***** Routing Controllers ***********/
mainApp.controller('homeCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {

}]);

mainApp.controller('aboutCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {
	
}]);

mainApp.controller('peopleCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {
   //$('body').removeClass().addClass('generalPage');
   sharedVars.changePageID('people');
	$scope.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12'];
   
}]);

/********************* Projects Controller ***************************/
mainApp.controller('projectsCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {
	$scope.projects = [
		{"name": "Cool Project 1", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 2", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 3", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 4", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 5", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 6", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 7", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 8", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 9", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 10", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 11", "desc": "This is a very cool project. But dummy One..."},
		{"name": "Cool Project 12", "desc": "This is a very cool project. But dummy One..."}
	];
}]);

