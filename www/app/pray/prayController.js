(function() {
    "use strict";

    var module = angular.module("wbf.mobile");

    var prayController = function($scope, $state, $stateParams) {
        // $scope.pray = pray;

        // configureTasks();
        // configureHeaderCard();
        // configureLocationCard();
        // configureImportantDatesCard();
        // getSurvey();
        // configureContactUsCard();
        // configureDevTasks();

        console.log('in PrayCtrl');

        $scope.bgColor = '#444444'; //$stateParams.color;

        $scope.cards = [{
            title: 'Swipe down to clear the card',
            image: 'img/pic.png'
        }, {
            title: 'Where is this?',
            image: 'img/pic.png'
        }, {
            title: 'What kind of grass is this?',
            image: 'img/pic2.png'
        }, {
            title: 'What beach is this?',
            image: 'img/pic3.png'
        }, {
            title: 'What kind of clouds are these?',
            image: 'img/pic4.png'
        }];

        // var cardTypes = [{
        //   title: 'Swipe down to clear the card',
        //   image: 'img/pic.png'
        // }, {
        //   title: 'Where is this?',
        //   image: 'img/pic.png'
        // }, {
        //   title: 'What kind of grass is this?',
        //   image: 'img/pic2.png'
        // }, {
        //   title: 'What beach is this?',
        //   image: 'img/pic3.png'
        // }, {
        //   title: 'What kind of clouds are these?',
        //   image: 'img/pic4.png'
        // }];

        // $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);


        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.cardSwiped = function(index) {
            var newCard = {
                title: "New Card"
            };
            $scope.cards.push(newCard);
        };


    };

    module.controller("PrayController", ["$scope", "$state", "$stateParams", "$rootScope", "$filter", prayController]);

    // cards
    module.controller('CardsController', function($scope, $ionicSwipeCardDelegate) {
        var cardTypes = [{
            title: 'Swipe down to clear the card',
            image: 'img/pic.png'
        }, {
            title: 'Where is this?',
            image: 'img/pic.png'
        }, {
            title: 'What kind of grass is this?',
            image: 'img/pic2.png'
        }, {
            title: 'What beach is this?',
            image: 'img/pic3.png'
        }, {
            title: 'What kind of clouds are these?',
            image: 'img/pic4.png'
        }];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

        $scope.cardSwiped = function(index) {
            $scope.addCard();
        };

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    });

    module.controller('CardController', function($scope, $ionicSwipeCardDelegate) {
        $scope.goAway = function() {
            var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
            card.swipe();
        };
    });

}());
