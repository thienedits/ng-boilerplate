angular.module('ngBoilerplate.home', [
  'ui.state',
  'plusOne'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: { pageTitle: 'Home' }
    });
  }
]).controller('HomeCtrl', [
  '$scope',
  '$http',
  '$location',
  function HomeController($scope, $http, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    });
  }
]);
;