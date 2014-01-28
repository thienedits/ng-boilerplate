angular.module('ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.project',
  'ngBoilerplate.resume',
  'ui.router',
  'ngBoilerplate.services.projects',
  'qpham.directives'
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
  '$http',
  'projectsFactory',
  function AppCtrl($scope, $http, projectsFactory) {
    $scope.loading = true;
    projectsFactory.getProjects().success(function (data) {
      $scope.projects = data.projects;
    }).error(function (error) {
      $scope.status = 'Unable to load project data: ' + error.message;
    });
    window.addEventListener('load', function () {
      FastClick.attach(document.body);
    }, false);
    $scope.loading = function () {
      return $http.pendingRequests.length > 0;
    };
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $scope.move = false;
    });
  }
]);
;