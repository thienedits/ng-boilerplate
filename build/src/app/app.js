  angular.module( 'qpham', [
  'ionic',
  'templates-app',
  'templates-common',
  'qpham.about',
  'qpham.project',
  'qpham.resume',
  'qpham.contacts',
  'ui.router',
  'qpham.services.projects',
  'qpham.directives',
  'firebase'
])

/*.value('$anchorScroll', angular.noop)*/

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise( '/projects' );

  $locationProvider.html5Mode(true).hashPrefix('!');
})

.run( function run (FBURL, $rootScope, $location) {
  /*$rootScope.expand = false;*/
  $rootScope.FBURL = FBURL;

})

// your Firebase URL goes here
// should look something like: https://blahblahblah.firebaseio.com
.constant('FBURL', 'https://qpham.firebaseio.com')

.controller( 'AppCtrl', function AppCtrl ( $rootScope, $scope, $state, $stateParams, $window, $location, FBURL, projectsFactory) {
  $scope.projects = projectsFactory.collection();
  $scope.links = ['projects', 'about', 'resume', 'contacts'];

  $scope.expand = false;

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $scope.$location = $location;

  $scope.loadingObj = {};
  $scope.lastSearch = {};
  $scope.lastSearch.search = '';//saves last contacts search
  $scope.loadingObj.loading = true; //shows loading spinner when true

  $scope.isActive = function(project) {
    if (project.$id && '/projects/' + project.$id == $location.path()) {
      return true;
    }

    if ('/' + project == $location.path()) {
      return true;
    }

    return false;
  };

  $scope.menuitemClick = function(project) {
    if (project.$id) {
      $location.path('/projects/' + project.$id);
    } else if (project) {
      $location.path('/' + project);
    } else {
      $location.path('/projects');
    }
    
    $scope.expand = false;
  };

  $scope.closeMenu = function() {
    $scope.expand = false;
  };

  $scope.openMenu = function() {
    $scope.expand = true;
  };

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $window.ga('send', 'pageview', {'page': $location.path()});
  });

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $scope.expand = false;
    $scope.loadingObj.loading = true;
  });

})

;