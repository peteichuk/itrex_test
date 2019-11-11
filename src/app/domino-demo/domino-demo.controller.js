(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('dominoDemoCtrl', DominoDemoCtrl);

  function DominoDemoCtrl($scope, $timeout) {
    $scope.rotate = 0;
    $scope.variantRotate = {
      increment: 'increment',
      decrement: 'decrement'
    };

    $scope.setRotate = function(variant) {
      if (variant === $scope.variantRotate.increment) {
        $scope.rotate += 90;
      } else if (variant === $scope.variantRotate.decrement) {
        $scope.rotate -= 90;
      } else {
        reset();
      }
    };

    function reset() {
      $scope.rotate = 0;
      $scope.disableBtns = true;
      if (!$scope.speed) {
        $scope.reset();
        $scope.disableBtns = false;
      } else {
        $timeout(function() {
          $scope.reset();
          $scope.disableBtns = false;
        }, $scope.speed);
      }
    }
  }

})();
