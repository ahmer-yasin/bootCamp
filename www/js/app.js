// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('bootCamp', ['ionic','ngCordova'])

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
/*.run(function($cordovaSplashscreen) {
    setTimeout(function() {
        $cordovaSplashscreen.hide()
    }, 5000)
})*/
/*.run(function(MyDataService) {
    MyDataService.getThings().then(function(data) {
        $cordovaSplashscreen.hide()
    })*/
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/splash');
        $stateProvider
            .state('splash',{
                url:'/splash',
                controller:'splash',
                templateUrl:'partials/splash.html'
            })
            .state('login',{
                url:'/login',
                controller:'loginCtrl',
                templateUrl:'partials/login.html'
            })
            .state('home',{
                url:'/home',
                controller:'homeCtrl',
                templateUrl:'partials/home.html'
            })



    })
