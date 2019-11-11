(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('dominoElement', DominoElementDirective);

  function DominoElementDirective() {
    return {
      restrict: 'E',
      scope: {
        number: '<',
        useBorder: '<',
        setSelected: '<'
      },
      templateUrl: 'app/domino-element/domino-element.template.html',
      controller: 'dominoElementCtrl'
    }
  }

})();
