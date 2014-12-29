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
            StatusBar.styleDefault();
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

    .state('app.prepare', {
        url: "/prepare",
        views: {
            'menuContent': {
                templateUrl: "templates/prepare.html"
            }
        }
    })

    .state('app.pray', {
            url: "/pray",
            views: {
                'menuContent': {
                    templateUrl: "templates/pray.html"
                }
            }
        })
        .state('app.concerns', {
            url: "/concerns",
            views: {
                'menuContent': {
                    templateUrl: "templates/concerns.html",
                    controller: 'ConcernsCtrl'
                }
            }
        })

    .state('app.concern', {
        url: "/concerns/:concern",
        views: {
            'menuContent': {
                templateUrl: "templates/concern.html",
                controller: 'ConcernCtrl'
            }
        }
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/concerns');
});
