/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('homeCtrl',function($scope,$localstorage,$ionicPopover,$state,Duration,$rootScope){
    $rootScope.time  = false;
/*checking if already login or login false*/
    if($state.current.authentication){
        if(!$localstorage.getObject('isLogged')){
            $state.go('login');
        }
    }


    /*All variables and getting data from object*/

    $scope.wellcome = 'Wellcome Home';
    $scope.user =$localstorage.getObject('user1');
    $scope.name = $scope.user.name;
    $scope.lastname = $scope.user.lastName;
    $scope.email = $scope.user.email;
    $scope.password = $scope.user.password;
    $scope.logout = function(){
        $localstorage.set('isLogged',false);
        Duration.reset();
        $state.go('login');
        $scope.popover.hide();
    }
    $scope.exitApp =function() {
        navigator.app.exitApp();

    }
//popover template for logout timer and exit
    $ionicPopover.fromTemplateUrl('partials/menu.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.popoverShow=function($event){
        $scope.popover.show($event);
        $scope.$$phase || $scope.$digest();
    };
    //get Current Positions
     var verifyLogin = function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    var onSuccess = function(position) {
        var lat = position.coords.latitude.toFixed(4);
        var log = position.coords.longitude.toFixed(4);
        if((lat >= 24.8140 && lat <= 24.8142) && (log >= 67.0503 && log <= 67.0506))
        {
            $localstorage.setObject('position',true);
            console.log(position)


        }
        else{
            $localstorage.setObject('position',false);
            alert('sign in with your own network');
            $state.go('home.main');
        }
        $scope.$digest();
    };
    verifyLogin();
    var onError = function() {
        alert('Please Check your Internet Connection!');
    };



})