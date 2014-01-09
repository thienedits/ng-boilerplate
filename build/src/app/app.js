angular.module('ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.project',
  'ngBoilerplate.resume',
  'ui.state',
  'ui.route'
]).value('$anchorScroll', angular.noop).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]).run(function run() {
}).controller('AppCtrl', [
  '$scope',
  '$location',
  '$http',
  '$state',
  '$timeout',
  '$window',
  function AppCtrl($scope, $location, $http, $state, $timeout, $window) {
    $scope.scrollPos = {};
    function getScrollTop() {
      if (typeof pageYOffset !== 'undefined') {
        return window.pageYOffset;
      } else {
        var B = document.body;
        var D = document.documentElement;
        D = D.clientHeight ? D : B;
        return D.scrollTop;
      }
    }
    window.onscroll = function () {
      if ($scope.okSaveScroll) {
        $scope.scrollPos[$location.path()] = getScrollTop();
        console.log($scope.scrollPos);
      }
    };
    $scope.scrollClear = function (path) {
      $scope.scrollPos[path] = 0;
    };
    $scope.loading = function () {
      return $http.pendingRequests.length > 0;
    };
    $http.get('/api/project').success(function (data, status, headers, config) {
      $scope.projects = data.projects;
    });
    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $scope.okSaveScroll = false;
    });
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $scope.expanded = false;
      $scope.pageTitle = 'Home | qpham.com';
      window.addEventListener('load', function () {
        FastClick.attach(document.body);
      }, false);
      $timeout(function () {
        window.scroll(0, $scope.scrollPos[$location.path()] ? $scope.scrollPos[$location.path()] : 0);
        $scope.okSaveScroll = true;
      }, 100);
    });
  }
]).directive('imgload', [function () {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        iElement.bind('load', function (e) {
          var parent = iElement.parent();
          parent.removeClass('is-loading').addClass('is-loaded');
          parent.find('div').remove();
        });
      }
    };
  }]).directive('scrollPosition', [function ($window) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var windowEl = angular.element($window);
        function getScrollTop() {
          if (typeof pageYOffset !== 'undefined') {
            return window.pageYOffset;
          } else {
            var B = document.body;
            var D = document.documentElement;
            D = D.clientHeight ? D : B;
            return D.scrollTop;
          }
        }
        windowEl.onscroll = function () {
          if (scope.okSaveScroll) {
            scope.$apply(function () {
              scope[iAttrs.scrollPosition] = getScrollTop();
            });
            console.log(scope.scrollPos);
          }
        };
      }
    };
  }]);
;