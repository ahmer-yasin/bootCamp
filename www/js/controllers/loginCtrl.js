/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('loginCtrl',function($scope,$state){
    $scope.login = function(user){
        if(user.name == 'abc' && user.password == 123){
            alert('wellcome You are login');
            $state.go('home.main');
        }

    }

});