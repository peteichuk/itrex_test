(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('dominoControlCtrl', DominoControlCtrl);

  function DominoControlCtrl($scope) {
    $scope.scale = 1;
    $scope.speed = 100;
  }

})();
