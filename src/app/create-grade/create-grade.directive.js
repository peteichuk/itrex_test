(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('createGrade', CreateGradeDirective);

  function CreateGradeDirective() {
    return {
      restrict: 'E',
      scope: {
        createdGrade: '='
      },
      templateUrl: 'app/create-grade/create-grade.template.html',
      controller: 'createGrade'
    }
  }

})();