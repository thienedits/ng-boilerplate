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
  'ionic',
  'qpham.services.projects'
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
      projects: [ 'projectsFactory', function (projectsFactory) {
        return projectsFactory.collection();
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
    url: '/:projectId',
    controller: ['$scope', '$stateParams', 'statesFactory', 'projectsFactory', 'FBURL', '$ionicSlideBoxDelegate', function($scope, $stateParams, statesFactory, projectsFactory, FBURL, $ionicSlideBoxDelegate) {
      $scope.projectId = $stateParams.projectId;
      $scope.project = projectsFactory.find($stateParams.projectId);
      $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';
      $scope.loadingObj.loading = false;

      var _fburl = new Firebase(FBURL);
      var projectRef = _fburl.child('projects/'+$stateParams.projectId);
      projectRef.on('value', function(dataSnapshot) {

        if (dataSnapshot.hasChild('largeImages')) {
          $scope.siteLink = false;
        }

        $scope.imgLength = dataSnapshot.child('images').numChildren();
        $ionicSlideBoxDelegate.update();
      });

      $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.prevSlide = function() {
        $ionicSlideBoxDelegate.previous();
      };

      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };
       
    }],
    templateUrl: 'projects/projects.detail.tpl.html'
  })
  .state('projects.large', {
    url: '/:projectId/large',
    controller: ['$scope', '$stateParams', 'statesFactory', 'projectsFactory', 'FBURL', '$ionicSlideBoxDelegate', '$timeout', function($scope, $stateParams, statesFactory, projectsFactory, FBURL, $ionicSlideBoxDelegate, $timeout) {
      $scope.projectId = $stateParams.projectId;
      $scope.project = projectsFactory.find($stateParams.projectId);
      $scope.loadingObj.loading = false;

      var _fburl = new Firebase(FBURL);
      var projectRef = _fburl.child('projects/'+$stateParams.projectId);
      projectRef.on('value', function(dataSnapshot) {
        $scope.imgLength = dataSnapshot.child('largeImages').numChildren();
        $scope.slideIndex = 0;
      });

      $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
      };

      $scope.prevSlide = function() {
        $ionicSlideBoxDelegate.previous();
      };

      // Called each time the slide changes
      $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
      };

      $scope.project.$on("loaded", function() {
        $ionicSlideBoxDelegate.update();
      });

    }],
    templateUrl: 'projects/projects.large.tpl.html'
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'ProjectsCtrl', function ProjectController( $rootScope, $scope, projectsFactory, $ionicSlideBoxDelegate ) {
  $scope.projects = projectsFactory.collection();
  $scope.siteLink = true;
  


})

;

