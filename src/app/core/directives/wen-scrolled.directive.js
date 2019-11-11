(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('whenScrolled', whenScrolled);

  /** @ngInject */
  function whenScrolled() {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var raw = elem[0];
        elem.bind('scroll', function () {
          if (raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight) {
            scope.$apply(attrs.whenScrolled);
          }
        });
      }
    }
  }

})();
