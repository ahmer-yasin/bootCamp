/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('splash',function($scope,$state){
    $scope.appName = 'BootCamp';
    $scope.splashFunc = function(){
        $state.go('login');
    };
    setInterval($scope.splashFunc, 5000);
});