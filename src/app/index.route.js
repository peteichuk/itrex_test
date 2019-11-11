(function () {
  'use strict';

  angular
    .module('angularjs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('school', {
        url: '/school',
        templateUrl: 'app/school/school.template.html',
        controller: 'schoolCtrl'
      })
      .state('domino', {
        url: '/domino',
        templateUrl: 'app/domino/domino.template.html',
        controller: 'dominoCtrl'
      });

    $urlRouterProvider.otherwise('school');
  }

})();
