angular.module('qpham.services.projects', ['qpham.services.firebaseRefs'])
  .factory('projectsFactory',
    function(FireRef, $q) {
      /*var ref = $firebase(new Firebase(FBURL+'/projects'));*/
      return {

        collection: function() {
          
          return FireRef.projects();
        },

        find: function(projectId) {
          return FireRef.projects().$child('/'+projectId);
        }
      };
    });