angular.module('ngBoilerplate.services.projects', [])
  .factory('projectsFactory', ['$http', function($http) {
    var urlBase = '/api/project', 
    projectsFactory = {};

    projectsFactory.getProjects = function() {
      return $http.get(urlBase);
    };

    projectsFactory.getProject = function(id) { 
      return $http.get(urlBase + '/' + id);
    };

    return projectsFactory;

  }]);