'use strict';

/**
 * @ngdoc function
 * @name profileAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profileAngularApp
 */
angular.module('profileAngularApp')
  .controller('MainCtrl', ['$scope', '$http', '$uibModal',
    function(scope, http, uibModal) {
      http.get('../../data.json').then(function(payload) {
        console.log(payload.data);
        scope.lines = payload.data.lines;
      });

      var Zline = 1;
      var Zstop = 2;
      var Ztop = 4;

      var blurAlpha = 0.3;

      document.getElementById('subway').addEventListener('load', function() {
        var svgDoc = document.getElementById('subway').getSVGDocument();
        console.log(svgDoc);
      }, false);

      var svgDoc = document.getElementById('subway').getSVGDocument();
      console.log(svgDoc);

      scope.svgready = function() {
        console.log(document.getElementById('subway'));
        console.log(document.getElementById('subway').getSVGDocument());
      };

      var changeFocus = function(f) {
        var svgDoc = angular.element(document.getElementById('subway').getSVGDocument());
        svgDoc.find('g').each(function(index, element) {
          f(element);
          //element.style.opacity = f(element);
        });
      };

      scope.focusStop = function(stop) {
        changeFocus(function(element) {
          if (element.id.indexOf(stop.id) !== -1 && element.id.indexOf('junction') === -1) {
            element.style.opacity = 1;
          } else {
            element.style.opacity = blurAlpha;
          }
        });
      };

      scope.focusLine = function(line) {
        changeFocus(function(element) {
          if (element.id === '' || element.id.charAt(0) === line.alias) {
            element.style.opacity = 1;
            element.zIndex = Ztop;
          } else {
            element.style.opacity = blurAlpha;
          }

          if (element.id.indexOf('line') !== -1) {
            element.zIndex = Zline;
          } else if (element.id.indexOf('junction') !== -1) {
            element.zIndex = Zstop;
          }
        });
      };

      scope.focusAll = function() {
        changeFocus(function(element) {
          element.style.opacity = 1;
          if (element.id.indexOf('line') !== -1) {
            element.zIndex = Zline;
          } else if (element.id.indexOf('junction') !== -1) {
            element.zIndex = Ztop;
          }
        });
      };

      var that = this;
      scope.showDetails = function(stop) {
        scope.chosenStop = stop;
        console.log(scope);
        that.modal = uibModal.open({
          scope: scope,
          animation: true,
          templateUrl: 'views/stopDetail.html',
          controller: 'StopdetailCtrl',
          size: 'lg',
          resolve: {
            chosenStop: function() {
              return scope.chosenStop;
            }
          }
        });
      };
    }
  ]);
