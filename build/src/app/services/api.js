angular.module('qpham.services.api', [])
  .factory('apiFactory', function($http) {
    var urlBase = '/api';
    var contacts = $http.get(urlBase + '/contacts').then(function (resp) {
      return resp.data;
    });

    var apiFactory = {};

    apiFactory.getStates = function() { 
      /*return Restangular.all('states').getList();*/
      return $http.get(urlBase + '/states');
    };

    apiFactory.getContacts = function() { 
      /*return Restangular.all('contacts').getList();*/
      /*return $http.get(urlBase + '/contacts');*/
      return contacts;
    };

    apiFactory.getContact = function(id) { 
      /*return Restangular.all('contacts').getList();*/
      return $http.get(urlBase + '/contacts/' + id);
    };

    return apiFactory;

  })

  ;