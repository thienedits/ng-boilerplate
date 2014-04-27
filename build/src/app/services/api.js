angular.module('qpham.services.api', []).factory('apiFactory', [
  '$http',
  function ($http) {
    var urlBase = '/api';
    var contacts = $http.get(urlBase + '/contacts').then(function (resp) {
        return resp.data;
      });
    var apiFactory = {};
    apiFactory.getStates = function () {
      return $http.get(urlBase + '/states');
    };
    apiFactory.getContacts = function () {
      return contacts;
    };
    apiFactory.getContact = function (id) {
      return $http.get(urlBase + '/contacts/' + id);
    };
    return apiFactory;
  }
]);
;