(function () {
  'use strict';

  angular
    .module('preloader', [])
    .service('preloaderService', preloader);

  /** @ngInject */
  function preloader() {
    var preloader = document.getElementById('preloader');
    return {
      show: function () {
        preloader.style.display = 'block';
      },
      hide: function () {
        preloader.style.display = 'none';
      }
    }
  }

})();
