'use strict';

/**
 * @ngdoc function
 * @name profileAngularApp.controller:StopdetailCtrl
 * @description
 * # StopdetailCtrl
 * Controller of the profileAngularApp
 */
angular.module('profileAngularApp')
  .controller('StopdetailCtrl', ['$scope', function (scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log(scope);
    console.log(scope.chosenStop);
  }]);
