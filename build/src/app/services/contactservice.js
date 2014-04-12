angular.module('qpham.services.contacts', ['qpham.services.firebaseRefs'])
  .factory('contactsFactory',
    function($rootScope, FireRef, FBURL, $q) {
      var contactsCount = 0;
      var contactsRef = new Firebase(FBURL+'/contacts');

      // Get the contacts count and notify the application
      contactsRef.on('value', function(snap) {
        contactsCount = snap.numChildren();
        $rootScope.$broadcast('onContactsAdded');
      });

      return {
        contacts: null,

        collection: function() {
          var deferred = $q.defer();

          if (this.contacts === null) {
            this.contacts = FireRef.contacts();
            this.contacts.$on('loaded', function(loadedData) {
              deferred.resolve();
            });
          }
          else {
            deferred.resolve();
          }
          // Return the promise to the controller
          return deferred.promise;
        },

        find: function(contactId) {
          return FireRef.contacts().$child('/'+contactId);
        },

        create: function(contact) {
         return FireRef.contacts().push({
            address: contact.address,
            city: contact.city,
            email: contact.email,
            name: contact.name,
            phone: contact.phone,
            state: contact.state,
            zip: contact.zip
          }).name();
        },

        save: function(contactId) {
          var contact = FireRef.contacts().$child('/'+contactId);
          contact.$save();
        },

        remove: function(contactId) {
          var contact = FireRef.contacts().child('/'+contactId);
          contact.remove();
        },

        getContactsCount: function() {
          return contactsCount;
        }
      };
    });