(function() {
  "use strict";

  var module = angular.module("wbf.mobile");

  module.directive('wbfNavbarButtons', function() {
        return {
            restrict: 'E',
            scope: {
            },
            templateUrl: 'app/directives/navbar-buttons/navbar-buttons.tpl.html',
            link: function(scope, element, attrs) {
                scope.logout = function() {
                    console.log('mike');
                };
            }
        };
    });
}());
