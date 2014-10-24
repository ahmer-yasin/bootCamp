/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('loginCtrl',function($scope,$state,Duration){
    $scope.username = '';
    $scope.password = '';
    $scope.login = function(){
        if($scope.username == 'abc' && $scope.password == 123){
            alert('wellcome You are login');
            $state.go('home');
        }

    }

});