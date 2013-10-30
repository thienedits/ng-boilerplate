angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.project',
  'ngBoilerplate.resume',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise( '/home' );

  $locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $http, $state, $timeout, $window ) {

  $scope.scrollPos = {}; // scroll position of each view

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
    if ($scope.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
      $scope.scrollPos[$location.path()] = getScrollTop();
      
      console.log($scope.scrollPos);
    }
  };

  $scope.scrollClear = function(path) {
    $scope.scrollPos[path] = 0;
  };

  $scope.loading = function() {
    return $http.pendingRequests.length > 0;
  };

  $http.get('/api/project').
    success(function(data, status, headers, config) {
      $scope.projects = data.projects;
    });

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    $scope.okSaveScroll = false;
  });

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.expanded = false;
    $scope.pageTitle = 'Home | qpham.com';
    
    window.addEventListener('load', function() {
      FastClick.attach(document.body);
    }, false);

    $timeout(function() { // wait for DOM, then restore scroll position
      window.scroll(0, $scope.scrollPos[$location.path()] ? $scope.scrollPos[$location.path()] : 0);
      $scope.okSaveScroll = true;
    }, 100);
  });

})

.directive('scrollPosition', [function ($window) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      var windowEl = angular.element($window);

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

      windowEl.onscroll = function() {
        if (scope.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
          scope.$apply(function() {
            scope[iAttrs.scrollPosition] = getScrollTop();
          });
          
          console.log(scope.scrollPos);
        }
      };
    }
  };
}])

;
