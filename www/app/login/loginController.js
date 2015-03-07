(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    var loginController = function($scope, $rootScope, $state, $ionicModal, $ionicHistory, $firebase, DataService) {

        // Form data for the login modal
        $scope.loginData = {};

        function createLoginModal() {
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('app/login/login.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;                
                $scope.user = DataService.getRef().getAuth();
                if (!$scope.user) {
                    $scope.modal.show();
                }
            });            
        }

        // Open the login modal
        $scope.login = function() {

            //Login method
            DataService.getRef().authWithPassword({
                email: $scope.loginData.username,
                password: $scope.loginData.password
            }, function(error, authData) {
                if (error === null) {
                    console.log("User ID: " + authData.uid +
                        ", Provider: " + authData.provider);
                    $scope.user = DataService.getRef().getAuth();

                    // temporarily save user data
                    // DataService.getRef().child("users").child(authData.uid).set(tempData);                    

                    $scope.modal.hide();
                    $scope.$apply();
                    $ionicHistory.nextViewOptions({
                      disableAnimate: true,
                      disableBack: true
                    });
                    $state.go('app.dashboard');
                } else {
                    console.log("Error authenticating user:", error);
                }
            });
        };

        // Logout method
        $scope.logout = function() {
            DataService.getRef().unauth();
            $scope.user = null;
            if ($scope.modal) {
                $scope.modal.show();
            }
            else {
                createLoginModal();
            }
        };

        createLoginModal();

    };
    
    module.controller("LoginController", ["$scope", "$rootScope", "$state", "$ionicModal", "$ionicHistory", "$firebase", "DataService", loginController]);

}());
