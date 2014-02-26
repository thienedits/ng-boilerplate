angular.module('qpham.project', [
  'ui.router',
  'angular-carousel'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('projects', {
      abstract: true,
      url: '/projects',
      resolve: {
        projects: [
          'apiFactory',
          function (apiFactory) {
            return apiFactory.getProjects();
          }
        ]
      },
      views: {
        'main': {
          controller: 'ProjectsCtrl',
          template: '<div class="projects" ui-view></div>'
        }
      }
    }).state('projects.list', {
      url: '',
      templateUrl: 'projects/projects.tpl.html',
      controller: 'ProjectsCtrl'
    }).state('projects.detail', {
      url: '/:id',
      controller: [
        '$scope',
        '$stateParams',
        'statesFactory',
        function ($scope, $stateParams, statesFactory) {
          $scope.loadingObj.loading = false;
          var id = $stateParams.id;
          $scope.project = $scope.projects[id];
          $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';
          if ($scope.project.largeImages == null) {
            $scope.siteLink = true;
          }
        }
      ],
      templateUrl: 'projects/projects.detail.tpl.html'
    }).state('projects.large', {
      url: '/:id/large',
      controller: [
        '$scope',
        '$stateParams',
        'statesFactory',
        function ($scope, $stateParams, statesFactory) {
          $scope.loadingObj.loading = false;
          var id = $stateParams.id;
          $scope.project = $scope.projects[id];
        }
      ],
      templateUrl: 'projects/projects.large.tpl.html'
    });
  }
]).controller('ProjectsCtrl', [
  '$scope',
  'projects',
  function ProjectController($scope, projects) {
    $scope.projects = projects;
    $scope.siteLink = false;
    $scope.loadingObj.loading = true;
  }
]);
;