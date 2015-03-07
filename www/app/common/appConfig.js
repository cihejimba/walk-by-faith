//Walk By Faith - Mobile Configuration Service
//The service will provide functionality to communicate with configuration setting
(function() {
    'use strict';

    var module = angular.module('wbf.mobile');

    //dev on devices
    module.constant('CONTACT_US_DEFAULT_EMAIL', 'questions@walkbyfaithapp.com');
    module.constant('DEFAULT_IMAGE', 'assets/images/no-image.jpg');
    module.constant('FIREBASE_URL', 'https://radiant-heat-1246.firebaseio.com')

    module.config(function($ionicConfigProvider) {
        // $ionicConfigProvider.backButton.text('').previousTitleText(false);
    });
    // module.config(function(cfpLoadingBarProvider) {
    //     cfpLoadingBarProvider.includeSpinner = false;
    // });
    module.service('AppConfig', function($cordovaDevice) {
        this.device = $cordovaDevice.getDevice();
        this.cordova = $cordovaDevice.getCordova();
        this.model = $cordovaDevice.getModel();
        this.platform = $cordovaDevice.getPlatform();
        this.uuid = $cordovaDevice.getUUID();
        this.version = $cordovaDevice.getVersion();
    });
}());
