angular.module('qpham', [
  'templates-app',
  'templates-common',
  'qpham.about',
  'qpham.project',
  'qpham.contacts',
  'ui.router',
  'qpham.services.projects',
  'qpham.directives',
  'firebase'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/projects');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]).run([
  'FBURL',
  '$rootScope',
  '$location',
  function run(FBURL, $rootScope, $location) {
    $rootScope.FBURL = FBURL;
  }
]).constant('FBURL', 'https://qpham.firebaseio.com').controller('AppCtrl', [
  '$rootScope',
  '$scope',
  '$timeout',
  '$state',
  '$stateParams',
  '$window',
  '$location',
  'FBURL',
  'projectsFactory',
  function AppCtrl($rootScope, $scope, $timeout, $state, $stateParams, $window, $location, FBURL, projectsFactory) {
    $scope.projects = projectsFactory.collection();
    $scope.links = [
      'projects',
      'about',
      'contacts'
    ];
    $scope.expand = false;
    $scope.scroll = 0;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $scope.$location = $location;
    $scope.loadingObj = {};
    $scope.lastSearch = {};
    $scope.lastSearch.search = '';
    $scope.loadingObj.loading = true;
    $scope.isActive = function (project) {
      if (project.$id && '/projects/' + project.$id == $location.path()) {
        return true;
      }
      if ('/' + project == $location.path()) {
        return true;
      }
      return false;
    };
    $scope.menuitemClick = function (project) {
      if (project.$id) {
        $location.path('/projects/' + project.$id);
      } else if (project) {
        $location.path('/' + project);
      } else {
        $location.path('/projects');
      }
      $scope.expand = false;
    };
    $scope.closeMenu = function () {
      $timeout(function () {
        $scope.expand = false;
      }, 100);
    };
    $scope.openMenu = function () {
      $scope.expand = true;
    };
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $window.ga('send', 'pageview', { 'page': $location.path() });
    });
    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $scope.expand = false;
      $scope.loadingObj.loading = true;
    });
  }
]);
;