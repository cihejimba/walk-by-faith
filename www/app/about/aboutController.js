(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    module.controller('AboutController', function($scope, $stateParams) {

        $scope.buttonClicked = function() {
            var utterance = new SpeechSynthesisUtterance('For God so loved the world that He gave His only born son, that whoever believes in him will have life forever.');
            window.speechSynthesis.speak(utterance);
        };

    });

}());
