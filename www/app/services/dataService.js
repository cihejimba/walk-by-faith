
(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    module.factory('DataService', function($firebase, FIREBASE_URL) {

        var ref = new Firebase(FIREBASE_URL);

        var getRef = function() {
            return ref;
        };

        var getConcerns = function() {

            var concernsRef = ref.child('concerns');

            var obj = $firebase(concernsRef).$asArray().$loaded();

            return obj;
        };

        var getHistory = function() {

            var historyRef = ref.child('users/' + ref.getAuth().uid + '/guide/history');

            console.log('/guide/history = ', 'users/' + ref.getAuth().uid + '/guide/history');

            var obj = $firebase(historyRef).$asArray().$loaded();

            return obj;
        };

        var getFavorites = function() {

            var favoritesRef = ref.child('users/' + ref.getAuth().uid + '/guide/favorites');

            var obj = $firebase(favoritesRef).$asArray().$loaded();

            return obj;
        };

        var getConcern = function(concernId) {

            var concernRef = ref.child('concerns/' + concernId);

            var obj = $firebase(concernRef).$asObject().$loaded();

            return obj;
        };

        var getGuides = function(concernId) {

            var guidesRef = ref.child('guides/' + concernId);
            
            var obj = $firebase(guidesRef).$asArray().$loaded();

            return obj;
        };


        return {
            getRef: getRef,
            getConcerns: getConcerns,
            getConcern: getConcern,
            getGuides: getGuides
        }

    })

}());
