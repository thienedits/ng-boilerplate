angular.module('ngBoilerplate.project', [
  'ui.router',
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
  'projectsFactory',
  function ProjectController($scope, $stateParams, projectsFactory) {
    var id = $stateParams.id;
    $scope.currentImage = 0;
    $scope.siteLink = false;
    projectsFactory.getProject(id).success(function (data) {
      $scope.project = data.project;
      $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';
      if ($scope.project.largeImages == null) {
        $scope.siteLink = true;
      }
    }).error(function (error) {
      $scope.status = 'Unable to load project data: ' + error.message;
    });
  }
]);
;