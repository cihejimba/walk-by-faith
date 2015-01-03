// Walk by Fath App
angular.module('wbf', [
    'ionic',
    'pascalprecht.translate',
    'firebase',
    'wbf.controllers',
    'wbf.services'
])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleBlackTranslucent();
        }
    });
})

.run(function($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(evt, toState) {
        if (toState.barClass) {
            $rootScope.barClass = toState.barClass;
        }
        else {
            $rootScope.barClass = "bar-default";
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.dashboard', {
        url: "/dashboard",
        views: {
            'menuContent': {
                templateUrl: "templates/dashboard.html",
                controller: 'DashboardCtrl'
            }
        },
        barClass: 'bar-dashboard'
    })

    .state('app.prepare', {
        url: "/prepare",
        views: {
            'menuContent': {
                templateUrl: "templates/prepare.html",
                    controller: 'PrepareCtrl'
            }
        }
    })

    .state('app.pray', {
        url: "/pray",
        views: {
            'menuContent': {
                templateUrl: "templates/pray.html",
                controller: 'PrayCtrl'                    
            }
        },
        barClass: 'bar-pray'
    })

    .state('app.concerns', {
        url: "/concerns",
        views: {
            'menuContent': {
                templateUrl: "templates/concerns.html",
                controller: 'ConcernsCtrl'
            }
        },
        barClass: 'bar-concerns'
    })

    .state('app.concern', {
        url: "/concerns/:concern/:color/:name",
        views: {
            'menuContent': {
                templateUrl: "templates/concern.html",
                controller: 'ConcernCtrl'
            }
        },
        barClass: 'bar-concern'
    })

    .state('app.profile', {
        url: "/profile",
        views: {
            'menuContent': {
                templateUrl: "templates/profile.html",
                controller: 'ProfileCtrl'
            }
        },
        barClass: 'bar-profile'
    })

    .state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "templates/settings.html",
                controller: 'SettingsCtrl'                    
            }
        }
    })

    .state('app.help', {
        url: "/help",
        views: {
            'menuContent': {
                templateUrl: "templates/help.html",
                controller: 'HelpCtrl'                    
            }
        }
    })

    .state('app.about', {
        url: "/about",
        views: {
            'menuContent': {
                templateUrl: "templates/about.html",
                controller: 'AboutCtrl'                    
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/concerns');
});
