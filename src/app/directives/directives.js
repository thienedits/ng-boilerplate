angular.module('qpham.directives', [])
  .directive('html', function ($window, $timeout, $location) {
  return {
    restrict: 'E',
    link: function (scope, iElement, iAttrs) {

      var windowEl = angular.element($window);

      scope.scrollPos = {}; // scroll position of each view

      scope.scrollClear = function(path) {
        scope.scrollPos[path] = 0;
      };

      function getScrollTop() {
        if(typeof pageYOffset !== 'undefined'){
          //most browsers except IE before #9
          return window.pageYOffset;
        }
        else{
          var B= document.body; //IE 'quirks'
          var D= document.documentElement; //IE with doctype
          D= (D.clientHeight)? D: B;
          return D.scrollTop;
        }
      }

      windowEl.on('scroll', function() {
        if (scope.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
            scope.scrollPos[$location.path()] = getScrollTop();
        }
      });

      scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        scope.okSaveScroll = false;
      });

      scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        $timeout(function() { // wait for DOM, then restore scroll position
          window.scroll(0, scope.scrollPos[$location.path()] ? scope.scrollPos[$location.path()] : 0);
          scope.okSaveScroll = true;
        }, 100);
      });
    }
  };
})

.directive('expand', function ($window) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {

      var html = angular.element(document.getElementsByTagName('html'));

      iElement.bind('click', function(){
        html.addClass('expanded');
      });

    }
  };
})

.directive('mainView', function ($window) {
  return {
    restrict: 'C',
    link: function (scope, iElement, iAttrs) {

      var el   = iElement[0],
          html = angular.element(document.getElementsByTagName('html')),
          a = angular.element(document.getElementsByClassName('menu')),
          nav = a[0];

      iElement.bind('webkitTransitionEnd', function(){
        var elX = el.getBoundingClientRect(),
        navX = nav.getBoundingClientRect();
        
        if (elX.left === navX.left) {
          html.removeClass('expanded');
        }
      });
    }
  };
})

.directive('imgload', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {

      iElement.bind('load', function(e){
        /*iElement.parent.removeClass('is-loading').addClass('is-loaded');*/
        var parent = iElement.parent();
        parent.removeClass('is-loading').addClass('is-loaded');
        parent.find('div').remove();
      });
 
    }
  };
})

.directive('resize', function ($window) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      
      var win = angular.element($window);

      scope.getWindowDimensions = function () {
        return { 'h': $window.innerHeight, 'w': $window.innerWidth };
      };
      
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) { 
        scope.style = function () {
          return { 
            'height': newValue.h + 'px'
          };
        };

      }, true);

      win.bind('resize', function () {
        scope.$apply();
      });

    }
  };
})

.directive('menuitem', function ($location) {
  return {
    restrict: 'C',
    link: function (scope, iElement, iAttrs) {

    scope.$location = $location;

	scope.isActive = function(project) {
		if('/project/' + project.id == $location.path()) {
		return true;
		}

		return false;
	};

    }
  };
})

.directive('delayClick', function ($timeout, $location) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      var link = iAttrs.ngHref || iAttrs.href,
      main = angular.element(document.getElementsByClassName('mainView'));

          

      iElement.bind('click', function(e){
        main.removeClass('move');
        scope.move = false;
        var timer = $timeout(function() {$location.path(link);}, 500);  
        timer.then(
          function() {

          },
          function() {

          }
        );
      });

      scope.$on(
        "$destroy",
        function( event ) {
            $timeout.cancel( timer );
        }
      );

    }
  };
})

;