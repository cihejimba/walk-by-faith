(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    var concernsController = function($scope, $state, $translate, ColorService, concerns) {

        $scope.concerns = concerns;

        $scope.incrementColor = function(index, listCount) {
            var startColor = "#7b00ff";
            var endColor = "#001da5";
            var percent = (index / listCount) * -1;
            var newColor = ColorService.shadeBlend(percent, startColor, endColor);
            return newColor;
        }

        $scope.getBadge = function() {
            // put join logic here
            var requestCount = Math.floor((Math.random() * 20));
            var receivedCount = Math.floor((Math.random() * 5));
            var answeredCount = Math.floor((Math.random() * 5));
            var badgeText = "";
            if (requestCount > 0 && requestCount < 15) {
                badgeText = requestCount.toString();
                if (receivedCount) {
                    badgeText += " / " + receivedCount;
                    if (answeredCount) {
                        badgeText += " / " + answeredCount;
                    }
                }
            }
            return "";
        }

        $scope.showConcern = function(concernId, bgColor) {
            $state.go("app.guide.concern", {
                concernId: concernId,
                color: bgColor
            });
        }

    };
    module.controller("ConcernsController", ["$scope", "$state", "$translate", "ColorService", "concerns", concernsController]);

    // logic for each selected concern
    var concernController = function($scope, $stateParams, $translate, ColorService, concern, guides) {

        $scope.bgColor = $stateParams.color;
        $scope.cardColor = ColorService.shadeBlend(.15, $scope.bgColor);

        $scope.user = {
            sub_concern: null
        };

        $scope.concern = concern;
        $scope.guides = guides;
        
        $scope.title = $scope.concern.name;      

        $scope.selectOption = function(option) {
            $scope.user.sub_concern = option;
        };

    };
    module.controller("ConcernController", ["$scope", "$stateParams", "$translate", "ColorService", "concern", "guides", concernController]);

}());
