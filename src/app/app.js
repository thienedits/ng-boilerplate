angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.project',
  'ngBoilerplate.resume',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $http, $state ) {

  $scope.loading = function() {
    return $http.pendingRequests.length > 0;
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.expanded = false;
    
    window.addEventListener('load', function() {
      FastClick.attach(document.body);
    }, false);
    
    /*if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | qpham.com' ;
    }*/
    $scope.pageTitle = 'Home | qpham.com';
  });

  /*$scope.$on('$viewContentLoaded', function(event){ 
    $scope.loading = function() {
      return false;
    };
  });*/

}).value('$anchorScroll', angular.noop)

;
