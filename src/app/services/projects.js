angular.module('ngBoilerplate.services.projects', [])
  .factory('projects', ['$http', '$q',
    function($http, $q){
      var deffered = $q.defer();
      var data = [];  
      var projects = {};

      projects.async = function() {
        $http.get('/api/project')
        .success(function (d) {
          data = d;
          deffered.resolve();
        });
        return deffered.promise;
      };
      projects.data = function() { return data; };

      return projects;
    }]);