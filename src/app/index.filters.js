
(function () {
    'use strict';

    angular
        .module('angularjs')
        .filter('Boolean', boolean);

  /** @ngInject */
    function boolean() {
        return function (input) {
            return JSON.parse(input);
        };
    }

})();
