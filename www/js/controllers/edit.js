/**
 * Created by AHMER on 10/24/2014.
 */

app.controller('edit',function($scope,$localstorage,$state){

    $scope.user = $localstorage.getObject('user1');

    $scope.update = function(user){
        var user = {name:user.name,lastName:user.lastName,email:user.email,password:user.password};
        $localstorage.setObject('user1',user);
        $state.go('home.main');
        }
})