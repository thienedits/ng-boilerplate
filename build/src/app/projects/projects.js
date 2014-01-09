angular.module('ngBoilerplate.project', [
  'ui.state',
  'plusOne',
  'angular-carousel'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('project', {
      url: '/project/:id',
      abstract: true,
      views: {
        'main': {
          controller: 'ProjectsCtrl',
          templateUrl: 'projects/projects.tpl.html'
        }
      },
      resolve: {
        api: [
          '$http',
          '$stateParams',
          function ($http, $stateParams) {
            return $http.get('/api/project/' + $stateParams.id);
          }
        ]
      }
    }).state('project.view', {
      url: '',
      templateUrl: 'projects/projects.view.tpl.html'
    }).state('project.large', {
      url: '/large',
      templateUrl: 'projects/projects.large.tpl.html'
    });
  }
]).controller('ProjectsCtrl', [
  '$scope',
  '$stateParams',
  '$state',
  'api',
  function ProjectController($scope, $stateParams, $state, api) {
    var project = api.data.project;
    $scope.currentImage = 0;
    $scope.siteLink = false;
    $scope.project = project;
    $state.transitionTo('project.view', { id: $stateParams.id });
    if (project.largeImages == null) {
      $scope.siteLink = true;
    }
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $scope.$parent.pageTitle = project.title + '| qpham.com';
    });
  }
]);
;