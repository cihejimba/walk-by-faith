(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    var guideController = function($scope, $state, $translate) {

        $scope.subtabs = [
            { text: 'Concerns', value: 'Concerns', sref: 'app.guide.concerns', disabled: false},
            { text: 'History', value: 'History', sref: 'app.guide.history', disabled: false },
            { text: 'Favorites', value: 'Favorites', sref: 'app.guide.favorites', disabled: false }                
        ];

        $scope.data = {
            subtab: $scope.subtabs[0].value
        };

    };
    module.controller("GuideController", ["$scope", "$state", "$translate", guideController]);

}());
