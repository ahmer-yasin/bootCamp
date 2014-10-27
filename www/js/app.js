// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('bootCamp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
}) .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/signUp');
        $stateProvider

            .state('login',{
                url:'/login',
                controller:'loginCtrl',
                templateUrl:'partials/login.html'
            })
            .state('home',{
                templateUrl:'partials/home.html',
                controller:'homeCtrl'
            })
            .state('home.main',{
                url:'/main',
                templateUrl:'partials/main.html',
                controller:'homeCtrl'
            })
            .state('home.geo',{
                url:'/geo',
                templateUrl:'partials/geolocation.html',
                controller:'geoLocation'
            })
            .state('home.editProfile',{
                url:'/editProfile',
                controller:'edit',
                templateUrl:'partials/editProfileScreen.html'
            })
            .state('home.search',{
                url:'/search',
                templateUrl:'partials/search.html',
                controller:'searchCtrl'
            })

            .state('signUp',{
                url:'/signUp',
                controller:'signUpCtrl',
                templateUrl:'partials/signUp.html'
            })
            .state('timer',{
                url:'/timer',
                templateUrl:'partials/timer.html',
                controller:'timerCtrl'
            })



    })
    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }])

    .directive('map', function() {
        return {
            restrict: 'E',
            scope: {
                onCreate: '&'
            },
            link: function ($scope, $element, $attr) {
                function initialize() {
                    var mapOptions = {
                        center: new google.maps.LatLng(43.07493, -89.381388),
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map($element[0], mapOptions);

                    $scope.onCreate({map: map});

                    // Stop the side bar from dragging when mousedown/tapdown on the map
                    google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                        e.preventDefault();
                        return false;
                    });
                }

                if (document.readyState === "complete") {
                    initialize();
                } else {
                    google.maps.event.addDomListener(window, 'load', initialize);
                }
            }
        }
    });



