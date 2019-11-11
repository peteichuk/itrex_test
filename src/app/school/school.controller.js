(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('schoolCtrl', SchoolCtrl);

  function SchoolCtrl($scope, SchoolService) {
    var school = new SchoolService();

    $scope.grades = [];

    school.getGrades()
      .success(function (grades) {
        $scope.grades = grades;
      });

    $scope.newGrade = function (event) {
      event.stopPropagation();
      event.preventDefault();
    };

    $scope.removeGrade = function (gradeId, index) {
      school.removeGrade(gradeId)
        .success(function () {
          $scope.grades.splice(index, 1);
        })
    };

    $scope.createdGrade = function (newGrade) {
      $scope.grades.push(newGrade);
    }
  }

})();
