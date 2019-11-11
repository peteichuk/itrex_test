(function () {
  'use strict';

  angular
    .module('angularjs')
    .filter('numberToLengthArray', NumberToLengthArrayFilter);

  function NumberToLengthArrayFilter() {
    return function(number) {
      if (!number) {
        return number;
      }
      var arr = [];
      for (var i = 1; i < number + 1; i++) {
        arr.push(i);
      }
      return arr;
    }
  }

})();
