/**
 * Created by AHMER on 10/24/2014.
 */

app.controller('edit',function($scope,$localstorage,$state,$rootScope) {
    $rootScope.time  = false;

    $scope.user = $localstorage.getObject('user1');

    $scope.update = function (user) {
        var user = {name: user.name, lastName: user.lastName, email: user.email, password: user.password};
        $localstorage.setObject('user1', user);
        $state.go('home.main');
    }
    $scope.getPicture = function () {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        navigator.camera.getPicture($scope.success, $scope.error, { quality: 50,
            destinationType: destinationType.DATA_URL });

    };


    $scope.success = function (imageUrl) {
        alert(imageUrl);
        var smallImage = document.getElementById('smallimage');

        // Unhide image elements
        //
        //smallImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = "data:image/jpeg;base64," + imageUrl;


    };

    $scope.error = function (e) {
        alert(e);
    };


});
