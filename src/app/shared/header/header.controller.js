(function () {
  'use strict';

  angular
    .module('angularjs')
    .controller('headerCtrl', HeaderCtrl);

  function HeaderCtrl($scope, $rootScope, $state, $timeout) {
    $scope.selectedIndex = 0;
    $scope.links = [
      {
        name: 'School',
        url: 'school'
      },
      {
        name: 'Domino',
        url: 'domino'
      }
    ];


    $timeout(function() {
      var currentLink = '';
      $rootScope.$on('$locationChangeSuccess', function() {
        currentLink = $state.$current.self.name;
        findIndexActiveLink();
      });
      currentLink = $state.$current.self.name;
      findIndexActiveLink();

      function findIndexActiveLink() {
        $scope.selectedIndex = $scope.links.findIndex(function(item) {
          return item.url === currentLink;
        })
      }
    });
  }

})();
