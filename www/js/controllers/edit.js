/**
 * Created by AHMER on 10/24/2014.
 */

app.controller('edit',function($scope,$localstorage,$state){
    $scope.test = "edit";

    $scope.user = $localstorage.getObject('user');

    $scope.update = function(user){
        var user = {name:user.name,lastName:user.lastName,email:user.email,password:user.password};
        $localstorage.setObject('user',user);
        $state.go('home.main');
        }
})