angular.module( 'ngBoilerplate.resume', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'resume', {
    url: '/resume',
    views: {
      "main": {
        controller: 'ResumeCtrl',
        templateUrl: 'resume/resume.tpl.html'
      }
    },
    data:{ pageTitle: 'Resume | qpham.com' }
  });
})

.controller( 'ResumeCtrl', function AboutCtrl( $scope ) {
  
  $scope.expanded = false;

  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

})

;
