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
angular.module( 'qpham.swipe', [
  'ui.router',
  'qpham.services.projects',
  'firebase',
  'ionic', 'ionic.contrib.ui.cards'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
 .config(function config( $stateProvider ) {
  $stateProvider.state( 'swipe', {
    abstract: true,
    url: '/swipe',
    resolve: {
      projects: [ 'projectsFactory', function (projectsFactory) {
        return projectsFactory.collection();
      }]
    },
    views: {
      "main": {
        template: '<div class="swipe" ng-controller="swipeCtrl" ui-view></div>'
      }
    }
  })
  .state('swipe.list', {
    url: '',
    templateUrl: 'swipe/swipe.tpl.html',
    controller: 'swipeCtrl'
  })
  .state('swipe.detail', {
    url: '/:projectId',
    controller: ['$scope', '$stateParams', 'statesFactory', 'projectsFactory', 'FBURL', function($scope, $stateParams, statesFactory, projectsFactory, FBURL) {
      $scope.loadingObj.loading = false;
      $scope.projectId = $stateParams.projectId;
      $scope.project = projectsFactory.find($stateParams.projectId);
      $scope.$parent.pageTitle = $scope.project.title + '| qpham.com';

      var _fburl = new Firebase(FBURL);
      var projectRef = _fburl.child('swipe/'+$stateParams.projectId);

      projectRef.once('value', function(dataSnapshot) {

        if (dataSnapshot.hasChild('largeImages')) {
          $scope.siteLink = false;
        }
      });
       
    }],
    templateUrl: 'swipe/swipe.detail.tpl.html'
  })
  .state('swipe.large', {
    url: '/:projectId/large',
    controller: ['$scope', '$stateParams', 'statesFactory', 'projectsFactory', function($scope, $stateParams, statesFactory, projectsFactory) {
      $scope.loadingObj.loading = false;
      $scope.projectId = $stateParams.projectId;
      $scope.project = projectsFactory.find($stateParams.projectId);
   
    }],
    templateUrl: 'swipe/swipe.large.tpl.html'
  });
})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'swipeCtrl', function ProjectController( $scope, $filter, orderByPriorityFilter, projects, $ionicSwipeCardDelegate, FBURL ) {
  $scope.siteLink = true;
  $scope.loadingObj.loading = false;

  var ref = new Firebase(FBURL+'/projects');
  $scope.projectsArr = [];
  $scope.cards = [];

  ref.on('value', function(snap) {
    snap.forEach(function(messageSnapshot) {
      $scope.projectsArr.push(messageSnapshot.val());
      console.log($scope.projectsArr);
    });

    var newCard = $scope.projectsArr[Math.floor(Math.random() * $scope.projectsArr.length)];
    $scope.cards.push(angular.extend({}, newCard));
  });

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = $scope.projectsArr[Math.floor(Math.random() * $scope.projectsArr.length)];
    $scope.cards.push(angular.extend({}, newCard));
  };
  
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
})

;

