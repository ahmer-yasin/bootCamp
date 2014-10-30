/**
 * Created by AHMER on 10/27/2014.
 */
app.controller('timerCtrl',function($scope,Duration,$localstorage,$state,$ionicNavBarDelegate,$rootScope){
    $rootScope.time  = true;
    $scope.goBack = function() {
        $ionicNavBarDelegate.back();
    };
    if(!$localstorage.getObject('position')){
        alert('Login with your working network');
        $state.go('home.main')
    }else if($localstorage.getObject('position'))
    {

        $scope.duration = Duration.getDuration();
        $scope.start =Duration.start;
        $scope.stop = Duration.stop;
        $scope.reset = Duration.reset;

    }

});