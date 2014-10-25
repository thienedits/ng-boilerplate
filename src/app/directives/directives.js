angular.module('qpham.directives', [])
  /*.directive('html', function ($window, $timeout, $location) {
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
})*/

.directive('imgload', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      footer = angular.element(document.getElementsByClassName('footer'));
      footer.css('opacity', 0);

      iElement.bind('load', function(e){
        var parent = iElement.parent().parent();
        parent.removeClass('is-loading').addClass('is-loaded');
        footer.css('opacity', 1);
      }); 
      scope.loadingObj.loading = false;
    }
  };
})

/*.directive('resize', function ($window) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      
      var win = angular.element($window);

      scope.getWindowDimensions = function () {
        return { 'h': $window.innerHeight, 'w': $window.innerWidth };
      };
      
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) { 
        if (newValue.w > 360) {
          scope.mobileSize = false;
        } else {
          scope.mobileSize = true;
        }

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
})*/

.directive('delayClick', function ($timeout, $location, $state, $window) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      var link = iAttrs.ngHref || iAttrs.href;  

      iElement.bind('click', function(e){
        e.preventDefault();      
        /*var timer = $timeout(function() {$location.path(link);}, 200),
        deregister = scope.$on("$destroy", function( e ) {
            $timeout.cancel( timer );
        });*/

        if(link.indexOf('projects') >= 0 || link.indexOf('contacts') >= 0 || link.indexOf('about') >= 0 || link.indexOf('resume') >= 0) {
          $timeout(function() {$location.path(link);}, 100); 
          
        }

        else {
          $timeout(function() {
            $window.open(link, "_blank");
          }, 100);
        }

      });

    }
  };
})

.directive('focusMe', function ($timeout, $parse) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      var model = $parse(iAttrs.focusMe);
      scope.$watch(model, function(value) {
        if(value === true) { 
          console.log('value=',value);
          $timeout(function() {
            iElement[0].focus();
          });
        }
      });

      
    }
  };
})

/*.directive('search', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        priority: '101',
        link: function(scope, elm, attr, ngModelCtrl) {
          if (attr.type === 'radio' || attr.type === 'checkbox') {
            return;
          }
          
          elm.unbind('input').unbind('keydown').unbind('change');
          elm.bind('blur', function() {
              scope.$apply(function() {
                  ngModelCtrl.$setViewValue(elm.val());
              });         
          })
          .bind("keypress", function(event) {
            if (event.which === 13) {
              event.target.blur();
            }
          });
        }
    };
})*/

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

.directive('backToTop', function ($timeout, $location) {
  return {
    restrict: 'C',
    link: function (scope, iElement, iAttrs) {
      
      iElement.bind('click', function(e){
        smoothScroll(document.getElementById('body'), 500);
      });

    }
  };
})

.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = window.pageYOffset;
      };
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
})

.directive('iconBtn', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      /*var iconBtn = Array.prototype.slice.call( document.querySelectorAll( 'button.icon-btn' ) ),
        totalIconBtn = iconBtn.length;

      iconBtn.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );

      function activate() {
        var self = this, activatedClass = 'btn-activated';

        if( classie.has( this, 'icon-btn' ) ) {
          // if it is the first of the two btn-7h then activatedClass = 'btn-error';
          // if it is the second then activatedClass = 'btn-success'
          activatedClass = 'ripple';
        }

        if( classie.has( this, 'btn-7h' ) ) {
          // if it is the first of the two btn-7h then activatedClass = 'btn-error';
          // if it is the second then activatedClass = 'btn-success'
          activatedClass = buttons7Click.indexOf( this ) === totalButtons7Click-2 ? 'btn-error' : 'btn-success';
        }
        else if( classie.has( this, 'btn-8g' ) ) {
          // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
          // if it is the second then activatedClass = 'btn-error3d'
          activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
        }

        if( !classie.has( this, activatedClass ) ) {
          classie.add( this, activatedClass );
          setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
        }
      }*/

      iElement.bind('click', function(e){
        var activatedClass = 'ripple',
        el = iElement[0];

        if( !classie.has( el, activatedClass ) ) {
          classie.add( el, activatedClass );
          $timeout( function() { classie.remove( el, activatedClass ); }, 250 );
        }

      });

    }
  };
})

.directive('gmaps', function ($window, $q) {
  function load_script() {
    var s = document.createElement('script'); // use global document since Angular's $document is weak
    s.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=initialize';
    document.body.appendChild(s);
  }
  function lazyLoadApi(key) {
    var deferred = $q.defer();
    $window.initialize = function () {
        deferred.resolve();
    };
    // thanks to Emil Stenström: http://friendlybit.com/js/lazy-loading-asyncronous-javascript/
    if ($window.attachEvent) {  
        $window.attachEvent('onload', load_script); 
    } else {
        $window.addEventListener('load', load_script, false);
    }
    return deferred.promise;
  }
  return {
    restrict: 'A',
    link: function (scope, element, attrs) { 

      if ($window.google && $window.google.maps) {
        console.log('gmaps already loaded');
      } else {
        lazyLoadApi().then(function () {
          console.log('promise resolved');

          if ($window.google && $window.google.maps) {

            
          } else {
            console.log('gmaps not loaded');
          }
        }, function () {
          console.log('promise rejected');
        });
      }
    
    }
  };
})

;