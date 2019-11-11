(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('dominoDemo', DominoDemoDirective);

  function DominoDemoDirective() {
    return {
      restrict: 'E',
      scope: {
        selectedDomino: '=',
        scale: '=',
        speed: '=',
        reset: '&'
      },
      templateUrl: 'app/domino-demo/domino-demo.template.html',
      controller: 'dominoDemoCtrl'
    }
  }

})();
