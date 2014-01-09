angular.module('ngBoilerplate.directives.scrollPosition', [])

.directive('scrollPosition', function ($window, $timeout, $location) {
  return {
    restrict: 'A',
    controller: function($scope) {
      $scope.scrollPos = {}; // scroll position of each view

      $scope.scrollClear = function(path) {
        $scope.scrollPos[path] = 0;
      };
    },
    link: function (scope, iElement, iAttrs) {

      function getScrollTop() {
        if(typeof pageYOffset !== 'undefined'){
          //most browsers except IE before #9
          return window.pageYOffset;
        }
        else{
          var B= document.body; //IE 'quirks'
          var D= document.documentElement; //IE with doctype
          D= (D.clientHeight)? D: B;
          return D.scrollTop;
        }
      }

      window.onscroll = function() {
        if (scope.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
          scope.scrollPos[$location.path()] = getScrollTop();
          
          console.log(scope.scrollPos);
        }
      };

      scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        scope.okSaveScroll = false;
      });

      scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        $timeout(function() { // wait for DOM, then restore scroll position
          window.scroll(0, scope.scrollPos[$location.path()] ? scope.scrollPos[$location.path()] : 0);
          scope.okSaveScroll = true;
        }, 100);
      });
    }
  };
});