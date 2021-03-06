angular.module( 'qpham.resume', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'resume', {
    url: '/resume',
    controller: 'ResumeCtrl',
    templateUrl: 'resume/resume.tpl.html',
    data:{ pageTitle: 'Resume | qpham.com' }
  });
})

.controller( 'ResumeCtrl', function AboutCtrl( $scope ) {
  $scope.expanded = false;
  $scope.loadingObj.loading = false;

  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

})

;
