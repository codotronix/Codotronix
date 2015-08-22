/****** The Main App *************/
var mainApp = angular.module('mainApp', ['ngRoute']);

/****** The Main Controller *****/
mainApp.controller('mainCtrl', ['$scope', 'sharedVars', function ($scope, sharedVars) {
	   
      $scope.classPageId = "loginPage";
      $scope.$on('pageChange', function () {
         $scope.classPageId = sharedVars.classPageId;
      });      
}]);


/***** autoTxtCtrl ***********/
mainApp.controller('autoTxtCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
   var greets = [
      "Hi ! my name is Suman Barick...",      
      "Thank you for visiting my site...",
      "My site is under-development...",
      "Please visit again in a few days...",
      "Have a nice day..."
   ];

   
   var greetNo = 0;

   var greet = function () {
      var lineArr = greets[greetNo].split('');
      var line = '';
      var ind = 0;     

      var typeLine = function () {
         line += lineArr[ind];
         $scope.autoText = line + '_';
         if(ind >= (lineArr.length - 1)) {
            //move on to next greetings msg
            greetNo++;
            if(greetNo > (greets.length - 1)) {
               greetNo = 0;
            }
            $timeout(greet, 3000);
         }
         else {
            ind++;
            $timeout(typeLine, 200);
         }
      };

      typeLine();     
   };

   //call the greet for the 1st time to start the timer chain
   greet();
            
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


$(function(){
   var oldMousePos = {};
   oldMousePos.x = 0;
   oldMousePos.y = 0;
   oldMousePos.time = 0;

   $('body').on('mousemove', function (ev) {
      
      var x = ev.offsetX; 
      var y = ev.offsetY; 
      var bgX = parseInt($('body').css('background-position-x'));
      var bgY = parseInt($('body').css('background-position-y'));
      var offset = 200;
      var diff = 10;
      var stabltyFctr = 0;

      if(x > (oldMousePos.x + stabltyFctr)) {
         bgX -= offset;
      } else if(x < (oldMousePos.x - stabltyFctr)) {
         bgX += offset;         
      }
      
      if(y > (oldMousePos.y + stabltyFctr)) {
         bgY -= offset;         
      } else if(y < (oldMousePos.y-stabltyFctr)) {
         bgY += offset;
      }

      oldMousePos.x = x;
      oldMousePos.y = y;
      

      $('body').stop().animate({
         "background-position-x": bgX + 'px',
         "background-position-y": bgY + 'px'
      }, 999);
   });
})



