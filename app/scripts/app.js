'use strict';

/**
 * @ngdoc overview
 * @name nodersCoWebApp
 * @description
 * # nodersCoWebApp
 *
 * Main module of the application.
 */
angular
  .module('nodersCoWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })     
      .otherwise({
        redirectTo: '/',
      });
  });
