(function () {
  'use strict';

  angular
    .module('angularjs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, preloaderService) {

    window.onload = function () {
      preloaderService.hide();
    };

    $log.debug('runBlock end');

  }

})();
