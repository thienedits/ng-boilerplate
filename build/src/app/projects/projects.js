angular.module('qpham.project', [
  'ionic',
  'qpham.services.projects'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('projects', {
      abstract: true,
      url: '/projects',
      resolve: {
        projects: [
          'projectsFactory',
          function (projectsFactory) {
            return projectsFactory.collection();
          }
        ]
      },
      controller: 'ProjectsCtrl',
      template: '<div ui-view></div>'
    }).state('projects.list', {
      url: '',
      templateUrl: 'projects/projects.tpl.html',
      controller: 'ProjectsCtrl'
    }).state('projects.detail', {
      url: '/:projectId',
      controller: [
        '$scope',
        '$stateParams',
        'statesFactory',
        'projectsFactory',
        'FBURL',
        '$ionicSlideBoxDelegate',
        function ($scope, $stateParams, statesFactory, projectsFactory, FBURL, $ionicSlideBoxDelegate) {
          $scope.projectId = $stateParams.projectId;
          $scope.project = projectsFactory.find($stateParams.projectId);
          $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';
          $scope.loadingObj.loading = false;
          var _fburl = new Firebase(FBURL);
          var projectRef = _fburl.child('projects/' + $stateParams.projectId);
          projectRef.on('value', function (dataSnapshot) {
            if (dataSnapshot.hasChild('largeImages')) {
              $scope.siteLink = false;
            }
            $scope.imgLength = dataSnapshot.child('images').numChildren();
            $ionicSlideBoxDelegate.update();
          });
          $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
          };
          $scope.prevSlide = function () {
            $ionicSlideBoxDelegate.previous();
          };
          $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
          };
        }
      ],
      templateUrl: 'projects/projects.detail.tpl.html'
    }).state('projects.large', {
      url: '/:projectId/large',
      controller: [
        '$scope',
        '$stateParams',
        'statesFactory',
        'projectsFactory',
        'FBURL',
        '$ionicSlideBoxDelegate',
        '$timeout',
        function ($scope, $stateParams, statesFactory, projectsFactory, FBURL, $ionicSlideBoxDelegate, $timeout) {
          $scope.projectId = $stateParams.projectId;
          $scope.project = projectsFactory.find($stateParams.projectId);
          $scope.loadingObj.loading = false;
          var _fburl = new Firebase(FBURL);
          var projectRef = _fburl.child('projects/' + $stateParams.projectId);
          projectRef.on('value', function (dataSnapshot) {
            $scope.imgLength = dataSnapshot.child('largeImages').numChildren();
            $scope.slideIndex = 0;
          });
          $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
          };
          $scope.prevSlide = function () {
            $ionicSlideBoxDelegate.previous();
          };
          $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
          };
          $scope.project.$on('loaded', function () {
            $ionicSlideBoxDelegate.update();
          });
        }
      ],
      templateUrl: 'projects/projects.large.tpl.html'
    });
  }
]).controller('ProjectsCtrl', [
  '$rootScope',
  '$scope',
  'projectsFactory',
  '$ionicSlideBoxDelegate',
  function ProjectController($rootScope, $scope, projectsFactory, $ionicSlideBoxDelegate) {
    $scope.projects = projectsFactory.collection();
    $scope.siteLink = true;
  }
]);
;