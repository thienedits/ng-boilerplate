angular.module('qpham.services.firebaseRefs', ['firebase'])
  .factory('FireRef', ['FBURL', '$firebase',
    function(FBURL, $firebase) {
      return {
        projects: function() {
          return $firebase(new Firebase(FBURL+'/projects'));
        },
        
        contacts: function() {
          return $firebase(new Firebase(FBURL+'/contacts'));
        },
        
        states: function() {
          return new Firebase(FBURL+'/states');
        }
      };
    }]);
