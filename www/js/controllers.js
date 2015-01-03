angular.module('wbf.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout) {
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

    $rootScope.bgColor = "#6964ff";

})

.controller('DashboardCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {


})

.controller('PrepareCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {

    $scope.bgColor = $stateParams.color;

})

.controller('PrayCtrl', function($scope, $rootScope, $stateParams, $window, $ionicNavBarDelegate) {

    $scope.bgColor = $stateParams.color;

    $scope.openBible = function(passage) {
        var bibleRef = "logosres:esv;ref=BibleESV.";
        var url = bibleRef + passage;
        $window.open(url, "_system");
    }

})

.controller('ConcernsCtrl', function($scope, $state, $firebase, $translate, ColorService) {

    var ref = new Firebase("https://radiant-heat-1246.firebaseio.com/concerns");
    var sync = $firebase(ref);

    var concernsArray = sync.$asArray();
    $scope.concerns = concernsArray;

    $scope.incrementColor = function(index, listCount) {
        var startColor = "#7770ff";
        // var startColor = "#b2ff1b";
        var endColor = "#00009a";
        // var endColor = "#22bbd5";
        var percent = (index / listCount) * -1;
        var newColor = ColorService.shadeBlend(percent, startColor, endColor);
        return newColor;
    }

    $scope.getBadge = function() {
        // put join logic here
        var requestCount = Math.floor((Math.random() * 20));
        var prayedCount = Math.floor((Math.random() * 5));
        var badgeText = "";
        if (requestCount > 0 && requestCount < 15) {
            badgeText = requestCount.toString();
            if (prayedCount) {
                badgeText += " / " + prayedCount;
            }
        }
        // return badgeText;
        return "";
    }

    $scope.showConcern = function(concernObj, bgColor, name) {
        console.log('bgColor = ', bgColor);
        $state.go("app.concern", {
            concern: concernObj,
            color: bgColor,
            name: name
        });
    }
})

.controller('ConcernCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {

    $scope.bgColor = $stateParams.color;
    $scope.title = $stateParams.name;

})

.controller('ProfileCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {


})

.controller('SettingsCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {


})

.controller('HelpCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {


})

.controller('AboutCtrl', function($scope, $rootScope, $stateParams, $ionicNavBarDelegate) {


});

