/********************************************************************
   Service Name: sharedVars 
   Job: This service will help to share common variables between
   controllers via $rootScope
 *******************************************************************/
mainApp.service('sharedVars', ['$rootScope', function ($rootScope) {
   var sharedVars = {};
   sharedVars.classPageId = 'homePage';

   sharedVars.changePageID = function (pageID) {
      console.log(pageID);
      this.classPageId = pageID;
      this.NotifyPageChange();
   };

   sharedVars.NotifyPageChange = function () {
      $rootScope.$broadcast('pageChange');
   };
 
   return sharedVars;
}]);