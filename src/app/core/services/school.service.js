(function () {
  'use strict';

  angular
    .module('angularjs')
    .service('SchoolService', SchoolService);

  /** @ngInject */
  function SchoolService($http, BaseUrl) {
    var School = function () {
    };

    School.prototype.getGrades = function () {
      return $http.get(BaseUrl + '/grades');
    };

    School.prototype.createGrade = function (name) {
      return $http.post(BaseUrl + '/grades/', JSON.stringify({name: name}));
    };

    School.prototype.updateGrade = function (gradeId, name) {
      return $http.put(BaseUrl + '/grades/' + gradeId, JSON.stringify({name: name}));
    };

    School.prototype.removeGrade = function (gradeId) {
      return $http.delete(BaseUrl + '/grades/' + gradeId);
    };

    School.prototype.getStudentsByGrade = function (gradeId, pagination) {
      var p = pagination ? '?_page=' + pagination.page + '&_limit=' + pagination.limit : '';
      return $http.get(BaseUrl + '/grades/' + gradeId + '/students' + p);
    };

    School.prototype.addStudentToGrade = function (student, gradeId) {
      return $http.post(BaseUrl + '/grades/' + gradeId + '/students', JSON.stringify(student));
    };

    School.prototype.removeStudent = function (id) {
      return $http.delete(BaseUrl + '/students/' + id);
    };

    School.prototype.getAverage = function(gradeId) {
      return this.getStudentsByGrade(gradeId);
    };

    return School;
  }

})();
