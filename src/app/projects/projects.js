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
angular.module( 'ngBoilerplate.project', [
  'ui.router',
  'angular-carousel'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'project', {
    url: '/project/:id',
    abstract: true,
    views: {
      "main": {
        controller: 'ProjectsCtrl',
        templateUrl: 'projects/projects.tpl.html'
      }
    }/*,
    resolve: {
      api: ['$http', '$stateParams', function($http, $stateParams) {
        return $http.get('/api/project/' + $stateParams.id);
      }]
    }*/
  })
  .state('project.view', {
    url: '',
    templateUrl: 'projects/projects.view.tpl.html'
  })
  .state('project.large', {
    url: '/large',
    templateUrl: 'projects/projects.large.tpl.html'
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProjectsCtrl', function ProjectController( $scope, $stateParams, projectsFactory ) {
  var id = $stateParams.id;
  $scope.currentImage = 0;
  $scope.siteLink = false;

  projectsFactory.getProject(id)
    .success(function (data) {
        $scope.project = data.project;
        $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';
        if ($scope.project.largeImages == null) {
          $scope.siteLink = true;
        }
    })
    .error(function (error) {
        $scope.status = 'Unable to load project data: ' + error.message;
    });
  
})

;

