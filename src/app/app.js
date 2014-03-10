  angular.module( 'qpham', [
  'templates-app',
  'templates-common',
  'qpham.about',
  'qpham.project',
  'qpham.resume',
  'qpham.contacts',
  'ui.router',
  'qpham.services.api',
  'qpham.directives'
])

.value('$anchorScroll', angular.noop)

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise( '/projects' );

  $locationProvider.html5Mode(true).hashPrefix('!');
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $rootScope, $scope, $state, $stateParams, $http, $window, $location) {
  $http.get('api/projects').then(function (resp) {
    $scope.projects = resp.data;
  });

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $scope.loadingObj = {};
  $scope.contactListPos = {};
  $scope.contactListPos.page = 1; //track contacts list page position
  $scope.lastSearch = {};
  $scope.lastSearch.search = '';
  $scope.loadingObj.loading = true; //shows loading spinner when true

  /*window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);*/
  
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $window.ga('send', 'pageview', {'page': $location.path()});
  });

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    $scope.move = false;
    $scope.loadingObj.loading = true;
  });

})

;