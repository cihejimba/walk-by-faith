// Walk by Fath App
(function() {
    'use strict';

    var module = angular.module('wbf.mobile');

    module.config(['$translateProvider', function($translateProvider) {

        $translateProvider.translations('en', {

                "APP_TITLE": "Walk by Faith",

                "WBF_SPEAK": "Speak",

                "MNU_DASHBOARD": "Dashboard",
                "MNU_PREPARE": "Prepare",
                "MNU_PROFILE": "Profile",
                "MNU_GUIDE": "Guide",
                "MNU_CONCERN": "Concern",
                "MNU_CONCERNS": "Concerns",
                "MNU_PRAY": "Pray",
                "MNU_SETTINGS": "Settings",
                "MNU_HELP": "Help",
                "MNU_ABOUT": "About",
                "MNU_LOGOUT": "Logout",

                "CON_ADDICTION": "Addiction",
                "CON_ADDICTION_1": "I feel like I might be getting addicted to something.",
                "CON_ADDICTION_2": "I have a problem with substance abuse.",
                "CON_ADDICTION_3": "I desperately need help with my addictions.",
                
                "GCT_ADDICTION_1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lacinia euismod. Morbi ac iaculis neque, ut scelerisque sem. Mauris dolor diam, dictum sed libero at, gravida faucibus arcu. Proin vel dui luctus, dapibus eros lacinia, posuere velit. Etiam dui sem, mattis vel mauris at, placerat semper velit. Ut quis aliquet est. Nunc sed sapien auctor, dignissim tortor ac, malesuada felis. Curabitur vel risus sem. Proin vitae enim nec dui vehicula tempor. Donec bibendum, tortor fringilla accumsan malesuada, nibh augue sodales turpis, in tincidunt enim mauris vel arcu. Curabitur nisi lectus, congue tempus augue ut, scelerisque blandit erat. Sed faucibus orci non pharetra eleifend. Aenean tempor purus ullamcorper cursus aliquet.",
                "GCT_ADDICTION_2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lacinia euismod. Proin vel dui luctus, dapibus eros lacinia, posuere velit. Etiam dui sem, mattis vel mauris at, placerat semper velit. Ut quis aliquet est. Nunc sed sapien auctor, dignissim tortor ac, malesuada felis. Curabitur vel risus sem. Proin vitae enim nec dui vehicula tempor. Donec bibendum, tortor fringilla accumsan malesuada, nibh augue sodales turpis, in tincidunt enim mauris vel arcu. Curabitur nisi lectus, congue tempus augue ut, scelerisque blandit erat. Sed faucibus orci non pharetra eleifend. Aenean tempor purus ullamcorper cursus aliquet.",
                "GCT_ADDICTION_3": "This is some text that will have commentary on the scripture above.",
                "GCT_ADDICTION_4": "Short one.",

                "CON_ALCOHOL": "Alcohol",
                "CON_ALCOHOL_1": "I am concerned about my drinking.",
                "CON_ALCOHOL_2": "I have a problem with drinking too much.",
                "CON_ALCOHOL_3": "My drinking is affecting my life in a negative way.",

                "CON_ANGER": "Anger",
                "CON_ANGER_1": "I am really angry right now.",
                "CON_ANGER_2": "I have a problem being angry most of the time.",
                "CON_ANGER_3": "My anger is out of control.",
                
                "CON_ANXIETY": "Anxiety",
                "CON_ANXIETY_1": "I worry too much.",
                "CON_ANXIETY_2": "My body suffers from stress and anxiety a lot.",
                "CON_ANXIETY_3": "I am having a bad panic attack right now.",

                "CON_CHEATING": "Cheating",
                "CON_DEBT": "Debt",
                "CON_DEPRESSION": "Depression",
                "CON_GRIEF": "Grief",
                "CON_HATE": "Hate",
                "CON_IDOLATRY": "Idolatry",
                "CON_LONLINESS": "Lonliness",
                "CON_LOVE": "Love",
                "CON_LUST": "Lust",
                "CON_LYING": "Lying",
                "CON_MARRIAGE": "Marriage",
                "CON_MIND": "Mind",
                "CON_MONEY": "Money",
                "CON_PORNOGRAPHY": "Pornography",
                "CON_SICKNESS": "Sickness",
                "CON_STEALING": "Stealing",

                "ZZZ_END": "The End"
        });

    $translateProvider.preferredLanguage('en');

    }]);

}());

