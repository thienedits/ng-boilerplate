angular.module('qpham.services.projects', ['qpham.services.firebaseRefs']).factory('projectsFactory', [
  'FireRef',
  '$q',
  function (FireRef, $q) {
    return {
      collection: function () {
        return FireRef.projects();
      },
      find: function (projectId) {
        return FireRef.projects().$child('/' + projectId);
      }
    };
  }
]);