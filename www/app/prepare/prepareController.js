(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    var prepareController = function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {

        $scope.bgColor = $stateParams.color;

        $scope.subtabs = [
            { text: 'Repent', value: 'Repent', sref: 'app.prepare.repent', disabled: false},
            { text: 'Give Over', value: 'Give Over', sref: 'app.prepare.give-over', disabled: false },
            { text: 'Worship', value: 'Worship', sref: 'app.prepare.worship', disabled: false }                
        ];

        $scope.data = {
            subtab: $scope.subtabs[0].value
        };

        $scope.openBible = function(passage) {
            var bibleRef = "logosres:esv;ref=BibleESV.";
            var url = bibleRef + passage;
            $window.open(url, "_system");
        }    

    };
    module.controller("PrepareController", ["$scope", "$rootScope", "$stateParams", "$ionicNavBarDelegate", prepareController]);

}());
