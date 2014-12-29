angular.module('wbf.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('ConcernsCtrl', function($scope, $state, $firebase, $translate, ColorService) {

    var ref = new Firebase("https://radiant-heat-1246.firebaseio.com/concerns");
    var sync = $firebase(ref);

    var concernsArray = sync.$asArray();
    $scope.concerns = concernsArray;

    $scope.incrementColor = function(index, listCount) {
        var startColor = "#6964ff";
        var endColor = "#00009a";        
        var percent = (index / listCount) * -1;
        var newColor = ColorService.shadeBlend(percent, startColor, endColor);
        return newColor;
    }

    $scope.getBadge = function(concernId) {
        // put join logic here
        var requestCount = Math.floor((Math.random()*20));
        var prayedCount = Math.floor((Math.random()*10));
        var badgeText = "";
        if (requestCount > 0 && requestCount < 15) {
            badgeText = requestCount.toString();
            if (prayedCount) {
                badgeText += " / " + prayedCount;
            }
        }
        return badgeText;
    }

    $scope.showConcern = function(concern) {
        $state.go("app.concern", {"concern": concern });
    }
})

.controller('ConcernCtrl', function($scope, $stateParams) {
    
    var concern = $stateParams.concern;
    $scope.title = concern.name;

});
