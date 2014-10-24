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
})
    .run(function($localstorage,$rootScope){
        if (!($localstorage.get('time'))) {
            $localstorage.set('time',new Date());
            console.log(new Date());
        }else{
            $rootScope.startTime = $localstorage.get('time');
        }




    })
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/signUp');
        $stateProvider

            .state('login',{
                url:'/login',
                controller:'loginCtrl',
                templateUrl:'partials/login.html'
            })
            .state('home',{
                templateUrl:'partials/home.html'
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


