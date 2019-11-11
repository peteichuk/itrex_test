(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('createGrade', CreateGradeCtrl);

  function CreateGradeCtrl($scope, SchoolService) {
    var school = new SchoolService();
    $scope.name = '';

    $scope.createGrade = function () {
      if (!$scope.name) {
        return;
      }
      school.createGrade($scope.name)
        .success(function (newGrade) {
          $scope.createdGrade(newGrade);
          $scope.name = '';
        })
    }
  }

})();
