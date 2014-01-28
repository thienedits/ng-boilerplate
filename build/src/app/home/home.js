angular.module('ngBoilerplate.home', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      }
    });
  }
]).controller('HomeCtrl', [
  '$scope',
  function HomeController($scope) {
    $scope.pageTitle = 'Home | qpham.com';
  }
]);
;