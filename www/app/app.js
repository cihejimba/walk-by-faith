// Walk by Faith App
angular.module('wbf.mobile', [
    'ionic',
    'firebase',
    'pascalprecht.translate',
    'ionic.contrib.ui.cards'
])

.run(function($ionicPlatform, $rootScope, $ionicModal, $ionicHistory, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
    $rootScope.$on('$stateChangeSuccess', function(evt, toState) {
        if (toState.barClass) {
            $rootScope.barClass = toState.barClass;
        } else {
            $rootScope.barClass = "wbf-header-default";
        }
    });
    $ionicModal.fromTemplateUrl('app/common/menu.html', {
        scope: $rootScope
    }).then(function(modal) {
        $rootScope.menuModal = modal;
    });

    $rootScope.profile = {
        avatar: "/img/me-at-night.png"
    };

    $rootScope.displayMenu = function() {
        // Create the menu modal that we will use later
        if ($rootScope.menuModal) {
            $rootScope.menuModal.show();
        }
    };
    $rootScope.closeMenu = function() {
        if ($rootScope.menuModal) {
            $rootScope.menuModal.hide();
        }
    };
    $rootScope.displayPage = function(sref) {
        $rootScope.menuModal.hide();
        $ionicHistory.nextViewOptions({
            disableAnimate: false,
            disableBack: true
        });
        $state.go(sref);
    };
});
