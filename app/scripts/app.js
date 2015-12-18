/* exported documentLoaded */
'use strict';

/**
 * @ngdoc overview
 * @name profileAngularApp
 * @description
 * # profileAngularApp
 *
 * Main module of the application.
 */
angular
  .module('profileAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var documentLoaded = function() {
  angular.element('.header').css({
    'opacity': '1'
  });
  setTimeout(function() {
    angular.element('.container').css({
      'opacity': '1'
    });
  }, 1000);
};
