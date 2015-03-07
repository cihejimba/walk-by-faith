(function() {
    'use strict';
    var app = angular.module("wbf.mobile");

    app.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider) {

        $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "app/common/tabs.html",
            controller: 'LoginController'
        })

        .state('app.dashboard', {
            url: "/dashboard",
            views: {
                'tab-dashboard': {
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: 'DashboardController',                                    
                }
            },
            barClass: 'wbf-header-dashboard'
        })

        .state('app.prepare', {
            url: "/prepare",
            abstract: true,
            views: {
                'tab-prepare': {
                    templateUrl: "app/prepare/prepare.html",
                    controller: 'PrepareController'
                }
            },
            barClass: 'wbf-header-prepare'
        })

        .state('app.prepare.repent', {
            url: "/repent",
            views: {
                'tab-prepare-repent': {
                    templateUrl: "app/prepare/prepare-repent.html",
                    controller: 'PrepareController'
                }
            },
            barClass: 'wbf-header-prepare'
        })

        .state('app.prepare.give-over', {
            url: "/give-over",
            views: {
                'tab-prepare-give-over': {
                    templateUrl: "app/prepare/prepare-give-over.html",
                    controller: 'PrepareController'
                }
            },
            barClass: 'wbf-header-prepare'
        })

        .state('app.prepare.give-over.test', {
            url: "/test",
            views: {
                'tab-prepare-give-over@app.prepare': {
                    templateUrl: "app/prepare/prepare-give-over-test.html",
                    controller: 'PrepareController'
                }
            },
            barClass: 'wbf-header-prepare'
        })

        .state('app.prepare.worship', {
            url: "/worship",
            views: {
                'tab-prepare-worship': {
                    templateUrl: "app/prepare/prepare-worship.html",
                    controller: 'PrepareController'
                }
            },
            barClass: 'wbf-header-prepare'
        })

        .state('app.pray', {
            url: "/pray",
            views: {
                'tab-pray': {
                    templateUrl: "app/pray/pray.html",
                    controller: 'CardsController'
                }
            },
            barClass: 'wbf-header-default'
        })

        .state('app.guide', {
            url: "/guide",
            abstract: true,
            views: {
                'tab-guide': {
                    templateUrl: "app/guide/guide.html",
                    controller: 'GuideController'
                }
            },
            barClass: 'wbf-header-default'
        })

        .state('app.guide.concerns', {
            url: "/concerns",
            views: {
                'tab-guide-concerns': {
                    templateUrl: "app/guide/guide-concerns.html",
                    controller: 'ConcernsController'
                }
            },
            resolve: {
                DataService: 'DataService',
                concerns: function (DataService) {
                    return DataService.getConcerns();
                }
            },
            barClass: 'wbf-header-default'
        })

        .state('app.guide.concern', {
            url: "/concerns/:concernId/:color",
            views: {
                'tab-guide-concerns': {
                    templateUrl: "app/guide/guide-concern.html",
                    controller: 'ConcernController'
                }
            },
            resolve: {
                DataService: 'DataService',
                concern: function (DataService, $stateParams) {
                    return DataService.getConcern($stateParams.concernId);
                },
                guides: function (DataService, $stateParams) {
                    return DataService.getGuides($stateParams.concernId);
                }
            },
            barClass: 'wbf-header-default'
        })

        .state('app.guide.history', {
            url: "/history",
            views: {
                'tab-guide-history': {
                    templateUrl: "app/guide/guide-history.html",
                    controller: 'HistoryController'
                }
            },
            // resolve: {
            //     DataService: 'DataService',
            //     history: function (DataService) {
            //         return DataService.getHistory();
            //     }
            // },
            barClass: 'wbf-header-default'
        })

        .state('app.guide.favorites', {
            url: "/favorites",
            views: {
                'tab-guide-favorites': {
                    templateUrl: "app/guide/guide-favorites.html",
                    controller: 'FavoritesController'
                }
            },
            // resolve: {
            //     DataService: 'DataService',
            //     favorites: function (DataService) {
            //         return DataService.getFavorites();
            //     }
            // },
            barClass: 'wbf-header-default'
        })

        .state('profile', {
            url: "/profile",
            templateUrl: "app/profile/profile.html",
            controller: 'ProfileController',
            barClass: 'wbf-header-default'
        })

        .state('settings', {
            url: "/settings",
            templateUrl: "app/settings/settings.html",
            controller: 'SettingsController',
            barClass: 'wbf-header-guide'
        })

        .state('help', {
            url: "/help",
            templateUrl: "app/help/help.html",
            controller: 'HelpController'
        })

        .state('about', {
            url: "/about",
            templateUrl: "app/about/about.html",
            controller: 'AboutController'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/dashboard');
    });

    app.run(function($rootScope) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log("An error occurred in transition\n from state: ", fromState);
            console.log("to state:", toState);
            console.log(error);
        });
    });
}());
