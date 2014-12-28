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

.controller('ConcernsCtrl', function($scope, $firebase, $translate, ColorService) {

    var ref = new Firebase("https://radiant-heat-1246.firebaseio.com/concerns");
    var sync = $firebase(ref);

    var concernsArray = sync.$asArray();
    $scope.concerns = concernsArray;

    $scope.incrementColor = function(index, listCount) {
        var startColor = "#6964ff";
        var endColor = "#000055";        
        var percent = (index / listCount) * -1;
        console.log('percent = ', percent);
        console.log('listCount = ', listCount);
        var newColor = ColorService.shadeBlend(percent, startColor, endColor);
        console.log('newColor = ', newColor);
        return newColor;
    }
})

.controller('ConcernCtrl', function($scope, $stateParams) {
    $scope.concern = $stateParams.concern;
});
