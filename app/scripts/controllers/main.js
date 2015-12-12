'use strict';

/**
 * @ngdoc function
 * @name nodersCoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodersCoWebApp
 */
angular.module('nodersCoWebApp')
  .controller('MainCtrl', function ($http, $scope) {
    /**
     * URLs bases
    */    
    var url_API = 'http://api.noders.com/api/';
    
    $scope.noders_list = [];
    $scope.noders_list_slideIndex = [];

    $scope.GET_noders = function () {
      $scope.noders_list = [];
      $scope.noders_list_slideIndex = [];
      var i = 1;
      $http.get(url_API + 'Noders').success(function (data) {
        console.log("Mensaje: " + data);
        data.forEach(function (element) {
          $scope.noders_list.push(element);
          $scope.noders_list_slideIndex.push(i++);
        }, this);
      });
    };
    
    //{"name":"DevLab","img":"https://cloud.githubusercontent.com/assets/952992/8094854/f0eb4d7c-0f9f-11e5-96a1-4e8739b0c07b.png","url":"http://www.devlab.cl/","id":"objectid","comunidadId":"5557bec9fa0f567413db2dfc"}
    $scope.partners_list = [];
    $scope.GET_partners = function () {
      $scope.partners_list = get_data(url_API + 'partners')
    };

    $scope.eventos_list = [];
    $scope.GET_eventos = function () {
      $scope.eventos_list = get_data(url_API + 'eventos')
    };

    var get_data = function (urlget) {
      var list = [];
      $http.get(urlget).success(function (data) {
        data.forEach(function (element) {
          list.push(element);
        }, this);
      });
      return list;
    };
  });

