(function () {
  'use strict';
  
  angular
    .module('angularjs')
    .controller('gradeCtrl', GradeCtrl);
  
  function GradeCtrl($scope, $mdToast, calculationFactory, SchoolService) {
    var school = new SchoolService();
    var pagination = {
      limit: 8,
      page: 0
    };
    var countStudents;
    var nameInput = document.getElementById('name');
    $scope.average = 0;

    $scope.students = [];
    $scope.getStudents = function () {
      if (pagination.limit * pagination.page >= countStudents) {
        return;
      }
      ++pagination.page;
      school.getStudentsByGrade($scope.gradeId, pagination)
        .success(function (students, status, headers) {
          countStudents = +headers('x-total-count');
          angular.forEach(students, function (student) {
            $scope.students.push(student);
          });
        });
    };
    $scope.getStudents();

    $scope.isAddingStudent = false;
    $scope.newStudent = {};
    $scope.addStudent = function () {
      $scope.isAddingStudent = true;
      school.addStudentToGrade($scope.newStudent, $scope.gradeId)
        .success(function (student) {
          $scope.students.push(Object.assign($scope.newStudent, {id: student.id}));
          $scope.newStudent = {};
          $scope.isAddingStudent = false;
          ++countStudents;
          calculationFactory.calculatePagination(pagination, countStudents);
          setAverage();
          nameInput.focus();
        });
    };

    $scope.removeStudent = function (id, index) {
      school.removeStudent(id)
        .success(function () {
          $scope.students.splice(index, 1);
          --countStudents;
          calculationFactory.calculatePagination(pagination, countStudents);
          setAverage();
        })
    };

    $scope.updateGrade = function () {
      school.updateGrade($scope.gradeId, $scope.name)
        .success(function () {
          $mdToast.show($mdToast.simple().textContent('Name was update').position('top right'));
        })
    };

    function setAverage() {
      school.getAverage($scope.gradeId)
        .success(function(students) {
          var assessments = students.map(function(item) {
            return +item.assessment
          });
          $scope.average = calculationFactory.calculateAverage(assessments);
        });
    }
    setAverage();
  }
  
})();