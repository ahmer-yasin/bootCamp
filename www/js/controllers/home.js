/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('homeCtrl',function($scope,$localstorage,$ionicPopover,$state,$http){
    if(!$localstorage.get('ip')) {
        //Ip get and set
        var url = "http://ip-api.com/json/?callback=JSON_CALLBACK";
        $http.jsonp(url).success(
            function (s) {
                $localstorage.setObject('ip', s);
                console.log(s);
            },
            function (e) {
                $scope.error = JSON.stringify(e);
            });
    }
    $scope.wellcome = 'Wellcome Home';
    $scope.user =$localstorage.getObject('user1');
    $scope.name = $scope.user.name;
    $scope.lastname = $scope.user.lastName;
    $scope.email = $scope.user.email;
    $scope.password = $scope.user.password;
    $ionicPopover.fromTemplateUrl('partials/menu.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.popoverShow=function($event){
        $scope.popover.show($event);
        $scope.$$phase || $scope.$digest();
    };
    $scope.category = ['Timer','Logout'];
    $scope.logout = function(){
        $state.go('login');
    }
    $scope.exitApp =function() {
        app.exitApp();
    }
})