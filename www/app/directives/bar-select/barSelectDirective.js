(function() {
  "use strict";

  var module = angular.module("wbf.mobile");

  module.directive('barSelect', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                model: '=ngModel',
                value: '=barSelect'
            },
            link: function(scope, element, attrs, ngModelCtrl) {
                element.on('click', function() {
                    scope.$apply(function() {
                        ngModelCtrl.$setViewValue(scope.value);
                    });
                });                    
                scope.$watch('model', function(newVal) {

                    // element.addClass('button-outline');
                    element.removeClass('active');                        

                    if (newVal === scope.value) {
                        // element.removeClass('button-outline');
                        element.addClass('active');
                    }
                });
            }
        };
    });
}());
