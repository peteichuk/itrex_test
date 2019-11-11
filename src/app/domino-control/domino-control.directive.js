(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('dominoControl', DominoControlDirective);

  function DominoControlDirective() {

    return {
      restrict: 'E',
      scope: {
        scale: '=',
        speed: '='
      },
      templateUrl: 'app/domino-control/domino-control.template.html',
      controller: 'dominoControlCtrl'
    }

  }

})();
