(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('grade', GradeDirective);

  function GradeDirective() {
    return {
      restrict: 'E',
      scope: {
        gradeId: '@',
        name: '='
      },
      templateUrl: 'app/grade/grade.template.html',
      controller: 'gradeCtrl'
    }
  }

})();
