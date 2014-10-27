/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('loginCtrl',function($scope,$state,$localstorage){
    $scope.person = $localstorage.getObject('user1');
    $scope.login = function(user){
        if(user.name == $scope.person.name && user.password == $scope.person.password){
            alert('wellcome You are login');
            $localstorage.set('isLogged',true);
            $state.go('home.main');
        }

    }


});