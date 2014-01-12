angular.module('ngBoilerplate.directives.imgload', [])

.directive('imgload', [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {

      iElement.bind('load', function(e){
        /*iElement.parent.removeClass('is-loading').addClass('is-loaded');*/
        var parent = iElement.parent();
        parent.removeClass('is-loading').addClass('is-loaded');
        parent.find('div').remove();
      });
      
      
    }
  };
}]);