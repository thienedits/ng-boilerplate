angular.module( 'qpham.contacts', [
  'ui.router',
  'contacts.directives',
  'ui.bootstrap',
  'qpham.services.api',
  'qpham.services.states'
])

.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contacts', {
    abstract: true,
    url: '/contacts',
    resolve: {
      contacts: [ 'apiFactory', function (apiFactory) {
        return apiFactory.getContacts();
      }]
    },
    views: {
      "main": {
        controller: 'contactsCtrl',
        template: '<div class="contacts" ui-view></div>'
      }
    }
  })
  .state('contacts.list', {
    url: '',
    templateUrl: 'contacts/contacts.tpl.html',
    controller: 'contactsCtrl'
  })
  .state('contacts.detail', {
    url: '/:id',
    controller: ['$scope', '$stateParams', 'statesFactory', function($scope, $stateParams, statesFactory) {
      $scope.loadingObj.loading = false;
      var id = $stateParams.id;
      $scope.contact = $scope.contacts[id];
      $scope.states = statesFactory.states;
      $scope.contact.state = $scope.states[getByKey($scope.states, $scope.contact.state)].name;

      function getByKey(arr, name) {
        for(var i = 0, len = arr.length; i < len; i += 1) {
          if (arr[i].name === name) {
            return i;
          }
        }
      }
   
    }],
    templateUrl: 'contacts/contacts.detail.tpl.html'
  })
  .state('contacts.edit', {
    url: '/:id/edit',
    templateUrl: 'contacts/contacts.edit.tpl.html',
    controller: ['$scope', '$http', '$location', '$stateParams', 'statesFactory', '$timeout', function ($scope, $http, $location, $stateParams, statesFactory, $timeout) {

      $scope.loadingObj.loading = false;
      var id = $stateParams.id;
      $scope.contact = $scope.contacts[id];
      $scope.states = statesFactory.states;
      $scope.contact.state = $scope.states[getByKey($scope.states, $scope.contact.state)].name;

      function getByKey(arr, name) {
        for(var i = 0, len = arr.length; i < len; i += 1) {
          if (arr[i].name === name) {
            return i;
          }
        }
      }
      

      $scope.saveContact = function () {
        $http.put('/api/contacts/' + $stateParams.id, $scope.contact).
          success(function(data) {
            $location.url('contacts/' + $stateParams.id);
            console.log('contact edit success');
          })
          .error(function (error) {
            $scope.status = 'Unable to load contacts data: ' + error;
            console.log(error);
          });
      };

      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        postal_code: 'short_name'
      };

      var autocomplete = new google.maps.places.Autocomplete(
          /** @type {HTMLInputElement} */(document.getElementById('address')),
          { types: ['geocode'] });
      // When the user selects an address from the dropdown,
      // populate the address fields in the form.
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        fillInAddress();
      });

      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
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

          //address string using only street_number and route
          address = num + ' ' + route;
        }

        //updates address input field to only have street_number and route
        $timeout(function() {
          $scope.contact.address = address;
        }, 100);  
          
      }

      $scope.geolocate = function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
                geolocation));
          });
        }
      };

    }]
  });
})



.controller( 'contactsCtrl', function contactsCtrl( $scope, filterFilter, contacts ) {
  $scope.contacts = contacts;
  $scope.contactsCount = contacts.length;
  $scope.entryLimit = 50;
  $scope.loadingObj.loading = false;
  $scope.search = $scope.lastSearch.search;
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
  }];

  $scope.setPage = function (page) {
    var totalPages = Math.ceil($scope.contactsCount/$scope.entryLimit);
    if (page <= 0) {
      $scope.contactListPos.page = 1;
    } else if (page > totalPages) {
      $scope.contactListPos.page = totalPages;
    } else {
      $scope.contactListPos.page = page;
    }

    window.scroll(0, 0);
  };

  $scope.$watch('search', function(oldTerm, newTerm) {
    // Create $scope.filtered and then calculat $scope.noOfPages, no racing!
    $scope.filtered = filterFilter($scope.contacts, oldTerm);
    $scope.contactsCount = $scope.filtered.length;
    $scope.lastSearch.search = oldTerm;

    //sets contacts list page to 1 on new searches
    if (oldTerm != newTerm) {
      $scope.contactListPos.page = 1;
    }
    
  });

  

})

;
