/**
 * Created by AHMER on 10/23/2014.
 */
app.controller('signUpCtrl',function($scope,$state,$localstorage){
    $scope.signUp = function(user){
        var user = {name:user.name,lastName:user.lastName,email:user.email,password:user.password}
         $localstorage.setObject('user',user);
        $state.go('login');
    }
})
