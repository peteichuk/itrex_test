(function () {
  'use strict';

  var BaseUrl = location.protocol + '//' + (location.hostname || 'localhost') + ':3001';

  angular
    .module('angularjs')
    .constant('BaseUrl', BaseUrl);

})();