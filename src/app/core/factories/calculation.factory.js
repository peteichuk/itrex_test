(function () {
  'use strict';

  angular
    .module('angularjs')
    .factory('calculationFactory', calculationFactory);

  function calculationFactory() {
    return {
      calculatePagination: function (pagination, totalCount) {
        var page = 1;
        if (pagination.limit > totalCount) {
          page = Math.ceil(totalCount / pagination.limit);
        } else if (pagination.limit < totalCount) {
          page = Math.ceil(totalCount / pagination.limit);
        }
        pagination.page = page;
        return page;
      },
      calculateAverage: function(averages) {
        if (!averages.length) {
          return 0;
        }
        return parseFloat((averages.reduce(function(previousValue, item) {return +previousValue + item}, [0]) / averages.length).toFixed(2));
      }
    }
  }

})();
