/**
 * Created by AHMER on 10/23/2014.
 */
app.controller('signUpCtrl',function($scope,$state,$localstorage,$rootScope){
    $rootScope.time  = false;
      $scope.signUp = function (user) {
            var user = {name: user.name, lastName: user.lastName, email: user.email, password: user.password}
            $localstorage.setObject('user1', user);
            $state.go('login');
        }

})
