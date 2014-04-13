angular.module('qpham.directives', []).directive('html', [
  '$window',
  '$timeout',
  '$location',
  function ($window, $timeout, $location) {
    return {
      restrict: 'E',
      link: function (scope, iElement, iAttrs) {
        var windowEl = angular.element($window);
        scope.scrollPos = {};
        scope.scrollClear = function (path) {
          scope.scrollPos[path] = 0;
        };
        function getScrollTop() {
          if (typeof pageYOffset !== 'undefined') {
            return window.pageYOffset;
          } else {
            var B = document.body;
            var D = document.documentElement;
            D = D.clientHeight ? D : B;
            return D.scrollTop;
          }
        }
        windowEl.on('scroll', function () {
          if (scope.okSaveScroll) {
            scope.scrollPos[$location.path()] = getScrollTop();
          }
        });
        scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          scope.okSaveScroll = false;
        });
        scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
          $timeout(function () {
            window.scroll(0, scope.scrollPos[$location.path()] ? scope.scrollPos[$location.path()] : 0);
            scope.okSaveScroll = true;
          }, 100);
        });
      }
    };
  }
]).directive('imgload', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      iElement.bind('load', function (e) {
        var parent = iElement.parent();
        parent.removeClass('is-loading').addClass('is-loaded');
      });
      scope.loadingObj.loading = false;
    }
  };
}).directive('resize', [
  '$window',
  function ($window) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var win = angular.element($window);
        scope.getWindowDimensions = function () {
          return {
            'h': $window.innerHeight,
            'w': $window.innerWidth
          };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          if (newValue.w > 360) {
            scope.mobileSize = false;
          } else {
            scope.mobileSize = true;
          }
          scope.style = function () {
            return { 'height': newValue.h + 'px' };
          };
        }, true);
        win.bind('resize', function () {
          scope.$apply();
        });
      }
    };
  }
]).directive('delayClick', [
  '$timeout',
  '$location',
  function ($timeout, $location) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var link = iAttrs.ngHref || iAttrs.href, main = angular.element(document.getElementsByClassName('main-content'));
        nav = angular.element(document.getElementsByClassName('menu'));
        iElement.bind('click', function (e) {
          main.removeClass('move');
          nav.removeClass('move');
          var timer = $timeout(function () {
              $location.path(link);
            }, 250);
          timer.then(function () {
          }, function () {
          });
        });
        scope.$on('$destroy', function (event) {
          $timeout.cancel(timer);
        });
      }
    };
  }
]).directive('input', function () {
  return {
    restrict: 'E',
    require: 'ngModel',
    priority: '101',
    link: function (scope, elm, attr, ngModelCtrl) {
      if (attr.type === 'radio' || attr.type === 'checkbox') {
        return;
      }
      elm.unbind('input').unbind('keydown').unbind('change');
      elm.bind('blur', function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(elm.val());
        });
      }).bind('keypress', function (event) {
        if (event.which === 13) {
          event.target.blur();
        }
      });
    }
  };
}).directive('noScroll', [
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
]).directive('scrollTop', [
  '$timeout',
  '$location',
  function ($timeout, $location) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        var cssPrefixString = {};
        var cssPrefix = function (propertie) {
          if (cssPrefixString[propertie] || cssPrefixString[propertie] === '') {
            return cssPrefixString[propertie] + propertie;
          }
          var e = document.createElement('div');
          var prefixes = [
              '',
              '-webkit-'
            ];
          for (var i in prefixes) {
            if (typeof e.style[prefixes[i] + propertie] !== 'undefined') {
              cssPrefixString[propertie] = prefixes[i];
              return prefixes[i] + propertie;
            }
          }
          return false;
        };
        var cssProp = {};
        var cssProp2 = {};
        cssProp['opacity'] = 0;
        cssProp[cssPrefix('transform')] = 'translate3d(0px, 150%, 0px)';
        cssProp2['opacity'] = 1;
        cssProp2[cssPrefix('transform')] = 'translate3d(0px, 0, 0px)';
        iElement.css(cssProp);
        window.onscroll = function () {
          if (pageYOffset >= 200) {
            iElement.css(cssProp2);
          } else {
            iElement.css(cssProp);
          }
        };
        iElement.bind('click', function (e) {
          smoothScroll(document.getElementById('body'), 500);
        });
      }
    };
  }
]);
;