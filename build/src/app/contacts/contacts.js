angular.module( 'qpham.contacts', [
  'ui.router',
  'contacts.directives',
  'ui.bootstrap',
  'qpham.services.contacts',
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

.filter('statesFilter', function() {
  return function(contacts, states) {
    var result = [];
    angular.forEach(contacts, function(contact) {
      if(states[0].name === false) {
          result.push(contact);
        }
        else if(states[0].name === true && contact.state == 'Alabama'){
          result.push(contact);
        }
        /*else if(types.double_suite == true && types.luxury == false && contact.type == 'double suite'){
          result.push(contact);
        }*/
    });
    return result;
  };
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contacts', {
    abstract: true,
    url: '/contacts',
    resolve: {
      contacts: [ 'contactsFactory', function (contactsFactory) {
        return contactsFactory.collection();
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
    url: '/:contactId',
    controller: ['$scope', '$stateParams', 'statesFactory', 'FBURL', function($scope, $stateParams, statesFactory, FBURL) {
      $scope.contactId = $stateParams.contactId;
      $scope.states = statesFactory.states;
      $scope.loadingObj.loading = false;

      var _fburl = new Firebase(FBURL);
      var contactRef = _fburl.child('contacts/'+$stateParams.contactId);
      
      contactRef.on('value', function(dataSnapshot) {
        $scope.contact = dataSnapshot.val();
      });
   
    }],
    templateUrl: 'contacts/contacts.detail.tpl.html'
  })
  .state('contacts.edit', {
    url: '/:contactId/edit',
    templateUrl: 'contacts/contacts.edit.tpl.html',
    controller: ['$scope', '$http', '$location', '$stateParams', 'statesFactory', '$timeout', 'FBURL', function ($scope, $http, $location, $stateParams, statesFactory, $timeout, FBURL) {
      $scope.states = statesFactory.states;
      $scope.loadingObj.loading = false;
      
      var _fburl = new Firebase(FBURL);
      var contactRef = _fburl.child('contacts/'+$stateParams.contactId);
      
      contactRef.on('value', function(dataSnapshot) {
        $scope.contact = dataSnapshot.val();
      });

      var onComplete = function(error) {
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

      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.loadingObj.loading = true;
        contactRef.update($scope.contact, onComplete);
      });

    }]
  });
})

.controller( 'contactsCtrl', function contactsCtrl( $scope, FBURL, filterFilter, orderByPriorityFilter, contactsFactory, statesFactory ) {
  $scope.entryLimit = 50;
  $scope.contacts = contactsFactory.contacts;
  $scope.contactsCount = contactsFactory.getContactsCount();
  $scope.states = statesFactory.states;
  $scope.filtered = [];
  $scope.loadingObj.loading = false;
  $scope.search = $scope.lastSearch.search;
  $scope.predicate = 'name';

  /*var contactsRef = new Firebase(FBURL+'/contacts');
  contactsRef.on('value', function(snap) {
    angular.forEach(snap.val(), function(value, key) {
      $scope.contacts.push(value);
    });
    console.log($scope.contacts);
  });*/

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

  /*$scope.$on('onContactsAdded', function() {
    $scope.$apply(function() {
      $scope.contactsCount = contactsFactory.getContactsCount();
    });
  });*/
  
  $scope.$watch('search', function(oldTerm, newTerm) {

      $scope.page = 1;
      // Use orderByPriorityFilter to convert Firebase Object into Array
      $scope.filtered = filterFilter(orderByPriorityFilter($scope.contacts), $scope.search);
      $scope.lastSearch.search = oldTerm;
      $scope.contactsCount = $scope.filtered.length;
    
  });

  $scope.setPage = function (page) {
    var totalPages = Math.ceil($scope.contactsCount/$scope.entryLimit);
    if (page <= 0) {
      $scope.page = 1;
    } else if (page > totalPages) {
      $scope.page = totalPages;
    } else {
      $scope.page = page;
    }

    window.scroll(0, 0);
  };

})

;
