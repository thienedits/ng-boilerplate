angular.module('contacts.directives', []).directive('sortBy', function () {
  return {
    template: '<a ng-click="sort(sortvalue)"> ' + '<span ng-transclude=""></span>' + '<span ng-show="sortedby == sortvalue">' + '</span>' + '</a>',
    restrict: 'A',
    transclude: true,
    scope: {
      sortdir: '=',
      sortedby: '=',
      sortvalue: '@',
      onsort: '='
    },
    link: function (scope, element, attrs) {
      scope.sort = function (sortvalue) {
        if (scope.sortedby == scope.sortvalue) {
          scope.sortdir = scope.sortdir == 'asc' ? 'desc' : 'asc';
        } else {
          scope.sortedby = scope.sortvalue;
          scope.sortdir = 'asc';
        }
        scope.onsort(scope.sortedby, scope.sortdir);
      };
    }
  };
}).directive('onBlurChange', [
  '$parse',
  function ($parse) {
    return function (scope, element, attr) {
      var fn = $parse(attr['onBlurChange']);
      var hasChanged = false;
      element.on('change', function (event) {
        hasChanged = true;
      });
      element.on('blur', function (event) {
        if (hasChanged) {
          scope.$apply(function () {
            fn(scope, { $event: event });
          });
          hasChanged = false;
        }
      });
    };
  }
]).directive('onEnterBlur', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        element.blur();
        event.preventDefault();
      }
    });
  };
}).directive('autofill', [
  '$timeout',
  function ($timeout) {
    function getByKey(arr, name) {
      for (var i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i].name === name) {
          return i;
        }
      }
    }
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        function fillInAddress() {
          var place = autocomplete.getPlace();
          for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            var num, route, address, locality, state, zip;
            if (addressType == 'street_number') {
              num = place.address_components[i][componentForm[addressType]];
            }
            if (addressType == 'route') {
              route = place.address_components[i][componentForm[addressType]];
            }
            if (addressType == 'locality') {
              locality = place.address_components[i][componentForm[addressType]];
              scope.contact.city = locality;
            }
            if (addressType == 'administrative_area_level_1') {
              state = place.address_components[i][componentForm[addressType]];
              document.getElementById(addressType).value = getByKey(scope.states, state);
              scope.contact.state = scope.states[getByKey(scope.states, state)].name;
            }
            if (addressType == 'postal_code') {
              zip = place.address_components[i][componentForm[addressType]];
              scope.contact.zip = zip;
            }
            address = num + ' ' + route;
          }
          $timeout(function () {
            scope.contact.address = address;
          }, 100);
        }
        var componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'long_name',
            postal_code: 'short_name'
          };
        var autocomplete = new google.maps.places.Autocomplete(element[0], { types: ['geocode'] });
        scope.geolocate = function () {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var geolocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));
            });
          }
        };
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
          fillInAddress();
        });
      }
    };
  }
]);
;