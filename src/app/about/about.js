angular.module( 'qpham.about', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    controller: 'AboutCtrl',
    templateUrl: 'about/about.tpl.html',
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  $scope.loadingObj.loading = false;
  $scope.expanded = false;

  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

})

;
