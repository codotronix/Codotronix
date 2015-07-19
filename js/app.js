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
mainApp.controller('projectsCtrl', ['$scope', 'sharedVars', '$http', '$location', function ($scope, sharedVars, $http, $location) {
	$http.get('data/projects/menu.json').then(function (res) {
      //console.log(data);
      $scope.projects = res.data.projects;
   });

   $scope.goToUrl = function (ev) {
      //console.log(ev.currentTarget.attributes["data-url"].nodeValue);
      //console.log(jQuery(ev.currentTarget).attr("data-url"));
      var dataUrl = ev.currentTarget.attributes["data-url"].nodeValue;
      $location.path(dataUrl);      
   }
}]);

/********************* Projects Pages Controller ********************/
mainApp.controller('projectPageCtrl', ['$scope', 'sharedVars', '$http', '$routeParams', function ($scope, sharedVars, $http, $routeParams) {
   var params = $routeParams;
   //console.log(params);
   var path = 'data/projects/posts/' + params.postID;
   //console.log(path);

   $http.get(path).then(function (res) {
      //console.log(res);
      $scope.data = res.data;
   });
}]);



