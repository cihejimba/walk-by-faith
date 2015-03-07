
(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    module.directive('backImg', function() {
        return function(scope, element, attrs) {
            var url = attrs.backImg;
            var content = element.find('a');
            // content.css({
            //     'background-image': 'url(' + url + ')',
            //     'background-size': 'cover'
            // });
        };
    })

    module.directive('backColor', function() {
        return function(scope, element, attrs) {
            var color = attrs.backColor;
            element.css({
                'background-color': color
            });
        };
    })

    module.directive('noScroll', function($document) {

      return {
        restrict: 'A',
        link: function($scope, $element, $attr) {

          $document.on('touchmove', function(e) {
            e.preventDefault();
          });
        }
      }
    })

}());
