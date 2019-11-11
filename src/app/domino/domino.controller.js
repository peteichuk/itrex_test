(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('dominoCtrl', DominoCtrl);

  function DominoCtrl($scope) {
    $scope.domino = 6;
    $scope.selectedDomino = [];
    $scope.slectedFirstByIndex = 0;
    $scope.slectedSecondByIndex = 0;

    $scope.chooseDominoElement = function(number) {
      if ($scope.selectedDomino.length >= 2) {
        reset();
      }
      $scope.selectedDomino.push(number);
      if ($scope.selectedDomino.length === 1) {
        $scope.slectedFirstByIndex = number;
      } else if ($scope.selectedDomino.length === 2) {
        $scope.slectedSecondByIndex = number;
      }
    };

    $scope.reset = function() {
      reset();
    };

    function reset() {
      $scope.selectedDomino = [];
      $scope.slectedFirstByIndex = 0;
      $scope.slectedSecondByIndex = 0;
    }
  }

})();
