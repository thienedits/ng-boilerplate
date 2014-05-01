angular.module('qpham.contacts', [
  'ui.router',
  'contacts.directives',
  'ui.bootstrap',
  'qpham.services.contacts',
  'qpham.services.states'
]).filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
}).filter('statesFilter', function () {
  return function (contacts, states) {
    var result = [];
    angular.forEach(contacts, function (contact) {
      if (states[0].name === false) {
        result.push(contact);
      } else if (states[0].name === true && contact.state == 'Alabama') {
        result.push(contact);
      }
    });
    return result;
  };
}).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('contacts', {
      abstract: true,
      url: '/contacts',
      resolve: {
        contacts: [
          'contactsFactory',
          function (contactsFactory) {
            return contactsFactory.collection();
          }
        ]
      },
      views: {
        'main': {
          controller: 'contactsCtrl',
          template: '<div class="contacts" ui-view></div>'
        }
      }
    }).state('contacts.list', {
      url: '',
      templateUrl: 'contacts/contacts.tpl.html',
      controller: 'contactsCtrl'
    }).state('contacts.detail', {
      url: '/:contactId',
      controller: [
        '$scope',
        '$stateParams',
        'statesFactory',
        'FBURL',
        function ($scope, $stateParams, statesFactory, FBURL) {
          $scope.contactId = $stateParams.contactId;
          $scope.states = statesFactory.states;
          $scope.loadingObj.loading = false;
          var _fburl = new Firebase(FBURL);
          var contactRef = _fburl.child('contacts/' + $stateParams.contactId);
          contactRef.on('value', function (dataSnapshot) {
            $scope.contact = dataSnapshot.val();
          });
        }
      ],
      templateUrl: 'contacts/contacts.detail.tpl.html'
    }).state('contacts.edit', {
      url: '/:contactId/edit',
      templateUrl: 'contacts/contacts.edit.tpl.html',
      controller: [
        '$scope',
        '$http',
        '$location',
        '$stateParams',
        'statesFactory',
        '$timeout',
        'FBURL',
        function ($scope, $http, $location, $stateParams, statesFactory, $timeout, FBURL) {
          $scope.states = statesFactory.states;
          $scope.loadingObj.loading = false;
          var _fburl = new Firebase(FBURL);
          var contactRef = _fburl.child('contacts/' + $stateParams.contactId);
          contactRef.on('value', function (dataSnapshot) {
            $scope.contact = dataSnapshot.val();
          });
          var onComplete = function (error) {
            if (error) {
              alert('Saved Failed.');
            } else {
              $scope.loadingObj.loading = false;
              $location.path('contacts/' + $stateParams.contactId);
              $scope.$apply();
            }
          };
          $scope.saveContact = function () {
            $scope.loadingObj.loading = true;
            contactRef.update($scope.contact, onComplete);
          };
          $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $scope.loadingObj.loading = true;
            contactRef.update($scope.contact, onComplete);
          });
          var componentForm = {
              street_number: 'short_name',
              route: 'long_name',
              locality: 'long_name',
              administrative_area_level_1: 'long_name',
              postal_code: 'short_name'
            };
          var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), { types: ['geocode'] });
          google.maps.event.addListener(autocomplete, 'place_changed', function () {
            fillInAddress();
          });
          function getByKey(arr, name) {
            for (var i = 0, len = arr.length; i < len; i += 1) {
              if (arr[i].name === name) {
                return i;
              }
            }
          }
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
                $scope.contact.city = locality;
              }
              if (addressType == 'administrative_area_level_1') {
                state = place.address_components[i][componentForm[addressType]];
                document.getElementById(addressType).value = getByKey($scope.states, state);
                $scope.contact.state = $scope.states[getByKey($scope.states, state)].name;
              }
              if (addressType == 'postal_code') {
                zip = place.address_components[i][componentForm[addressType]];
                $scope.contact.zip = zip;
              }
              address = num + ' ' + route;
            }
            $timeout(function () {
              $scope.contact.address = address;
            }, 100);
          }
          $scope.geolocate = function () {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                var geolocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));
              });
            }
          };
        }
      ]
    });
  }
]).controller('contactsCtrl', [
  '$scope',
  'FBURL',
  'filterFilter',
  'orderByPriorityFilter',
  'contactsFactory',
  'statesFactory',
  function contactsCtrl($scope, FBURL, filterFilter, orderByPriorityFilter, contactsFactory, statesFactory) {
    $scope.entryLimit = 50;
    $scope.contacts = contactsFactory.contacts;
    $scope.contactsCount = contactsFactory.getContactsCount();
    $scope.states = statesFactory.states;
    $scope.filtered = [];
    $scope.loadingObj.loading = false;
    $scope.search = $scope.lastSearch.search;
    $scope.predicate = 'name';
    $scope.headers = [
      {
        title: 'Id',
        value: 'id'
      },
      {
        title: 'Name',
        value: 'name'
      },
      {
        title: 'Email',
        value: 'email'
      },
      {
        title: 'Address',
        value: 'address'
      },
      {
        title: 'City',
        value: 'city'
      },
      {
        title: 'State',
        value: 'state'
      }
    ];
    $scope.$watch('search', function (oldTerm, newTerm) {
      $scope.page = 1;
      $scope.filtered = filterFilter(orderByPriorityFilter($scope.contacts), $scope.search);
      $scope.lastSearch.search = oldTerm;
      $scope.contactsCount = $scope.filtered.length;
    });
    $scope.setPage = function (page) {
      var totalPages = Math.ceil($scope.contactsCount / $scope.entryLimit);
      if (page <= 0) {
        $scope.page = 1;
      } else if (page > totalPages) {
        $scope.page = totalPages;
      } else {
        $scope.page = page;
      }
      window.scroll(0, 0);
    };
  }
]);
;