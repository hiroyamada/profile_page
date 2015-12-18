'use strict';

/**
 * @ngdoc directive
 * @name profileAngularApp.directive:ngsvg
 * @description
 * # ngsvg
 */
angular.module('profileAngularApp')
  .directive('ngsvg', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var url = scope.$eval(attrs.src);
        element.replaceWith('<object class="noclick" type="image/svg+xml" data="' + url + '"></object>');
      }
    };
  });
