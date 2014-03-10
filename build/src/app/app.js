angular.module('qpham', [
  'templates-app',
  'templates-common',
  'qpham.about',
  'qpham.project',
  'qpham.resume',
  'qpham.contacts',
  'ui.router',
  'qpham.services.api',
  'qpham.directives'
]).value('$anchorScroll', angular.noop).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/projects');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]).run(function run() {
}).controller('AppCtrl', [
  '$rootScope',
  '$scope',
  '$state',
  '$stateParams',
  '$http',
  '$window',
  '$location',
  function AppCtrl($rootScope, $scope, $state, $stateParams, $http, $window, $location) {
    $http.get('api/projects').then(function (resp) {
      $scope.projects = resp.data;
    });
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $scope.loadingObj = {};
    $scope.contactListPos = {};
    $scope.contactListPos.page = 1;
    $scope.lastSearch = {};
    $scope.lastSearch.search = '';
    $scope.loadingObj.loading = true;
    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $scope.move = false;
      $scope.loadingObj.loading = true;
    });
  }
]);
;