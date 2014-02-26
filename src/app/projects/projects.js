/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'qpham.project', [
  'ui.router',
  'angular-carousel'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
 .config(function config( $stateProvider ) {
  $stateProvider.state( 'projects', {
    abstract: true,
    url: '/projects',
    resolve: {
      projects: [ 'apiFactory', function (apiFactory) {
        return apiFactory.getProjects();
      }]
    },
    views: {
      "main": {
        controller: 'ProjectsCtrl',
        template: '<div class="projects" ui-view></div>'
      }
    }
  })
  .state('projects.list', {
    url: '',
    templateUrl: 'projects/projects.tpl.html',
    controller: 'ProjectsCtrl'
  })
  .state('projects.detail', {
    url: '/:id',
    controller: ['$scope', '$stateParams', 'statesFactory', function($scope, $stateParams, statesFactory) {
      $scope.loadingObj.loading = false;
      var id = $stateParams.id;
      $scope.project = $scope.projects[id];
      $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';

      if ($scope.project.largeImages == null) {
        $scope.siteLink = true;
      }
       
    }],
    templateUrl: 'projects/projects.detail.tpl.html'
  })
  .state('projects.large', {
    url: '/:id/large',
    controller: ['$scope', '$stateParams', 'statesFactory', function($scope, $stateParams, statesFactory) {
      $scope.loadingObj.loading = false;
      var id = $stateParams.id;
      $scope.project = $scope.projects[id];
   
    }],
    templateUrl: 'projects/projects.large.tpl.html'
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProjectsCtrl', function ProjectController( $scope, projects ) {
  $scope.projects = projects;
  $scope.siteLink = false;
  $scope.loadingObj.loading = true;
  
})

;

