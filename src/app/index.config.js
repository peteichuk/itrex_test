(function () {
  'use strict';

  angular
    .module('angularjs')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('red')
      .warnPalette('red')
      .backgroundPalette('grey');
  }
})();
