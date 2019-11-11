(function () {
  'use strict';

  angular
    .module('angularjs')
    .directive('headerNav', HeaderDirective);

  function HeaderDirective() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'app/shared/header/header.template.html',
      controller: 'headerCtrl'
    }
  }

})();
