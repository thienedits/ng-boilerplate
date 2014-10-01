angular.module('qpham.directives', []).directive('imgload', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      footer = angular.element(document.getElementsByClassName('footer'));
      footer.css('opacity', 0);
      iElement.bind('load', function (e) {
        var parent = iElement.parent();
        parent.removeClass('is-loading').addClass('is-loaded');
        footer.css('opacity', 1);
      });
      scope.loadingObj.loading = false;
    }
  };
}).directive('delayClick', [
  '$timeout',
  '$location',
  '$state',
  '$window',
  function ($timeout, $location, $state, $window) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var link = iAttrs.ngHref || iAttrs.href;
        iElement.bind('click', function (e) {
          e.preventDefault();
          if (link.indexOf('projects') >= 0 || link.indexOf('contacts') >= 0 || link.indexOf('about') >= 0 || link.indexOf('resume') >= 0) {
            $timeout(function () {
              $location.path(link);
            }, 100);
          } else {
            $timeout(function () {
              $window.open(link, '_blank');
            }, 100);
          }
        });
      }
    };
  }
]).directive('focusMe', [
  '$timeout',
  '$parse',
  function ($timeout, $parse) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var model = $parse(iAttrs.focusMe);
        scope.$watch(model, function (value) {
          if (value === true) {
            console.log('value=', value);
            $timeout(function () {
              iElement[0].focus();
            });
          }
        });
      }
    };
  }
]).directive('noScroll', [
  '$document',
  function ($document) {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attr) {
        $document.on('touchmove', function (e) {
          e.preventDefault();
        });
      }
    };
  }
]).directive('backToTop', [
  '$timeout',
  '$location',
  function ($timeout, $location) {
    return {
      restrict: 'C',
      link: function (scope, iElement, iAttrs) {
        iElement.bind('click', function (e) {
          smoothScroll(document.getElementById('body'), 500);
        });
      }
    };
  }
]).directive('scrollPosition', [
  '$window',
  function ($window) {
    return {
      scope: { scroll: '=scrollPosition' },
      link: function (scope, element, attrs) {
        var windowEl = angular.element($window);
        var handler = function () {
          scope.scroll = window.pageYOffset;
        };
        windowEl.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  }
]).directive('iconBtn', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        iElement.bind('click', function (e) {
          var activatedClass = 'ripple', el = iElement[0];
          if (!classie.has(el, activatedClass)) {
            classie.add(el, activatedClass);
            $timeout(function () {
              classie.remove(el, activatedClass);
            }, 250);
          }
        });
      }
    };
  }
]).directive('gmaps', [
  '$window',
  '$q',
  function ($window, $q) {
    function load_script() {
      var s = document.createElement('script');
      s.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=initialize';
      document.body.appendChild(s);
    }
    function lazyLoadApi(key) {
      var deferred = $q.defer();
      $window.initialize = function () {
        deferred.resolve();
      };
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
  }
]);
;