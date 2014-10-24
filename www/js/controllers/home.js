/**
 * Created by AHMER on 10/21/2014.
 */
app.controller('homeCtrl',function($scope,$localstorage){
    $scope.wellcome = 'Wellcome Home';
    $scope.user =$localstorage.getObject('user');
    $scope.name = $scope.user.name;
    $scope.lastname = $scope.user.lastName;
    $scope.email = $scope.user.email;
    $scope.password = $scope.user.password;

    /*$scope.time = $rootScope.startTime;
    var myObj = new Date();
    console.log(typeof (myObj))
    console.log(myObj.getYear())
    console.log(myObj.getMonth())
    console.log(myObj.getDate())
    console.log(myObj.getHours())
    console.log(myObj.getMinutes())
    console.log( typeof (new Date()));
    var date1 = new Date(2016,2,3,7,9) // 9:00 AM
    var date2 = new Date(); // 5:00 PM
    if (date2 < date1) {
        date2.setDate(date2.getDate() + 1);
    }

    var diff = date2 - date1;
    var Seconds_from_T1_to_T2 = diff / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

    function secondsToString(seconds)
    {
        var numyears = Math.floor(seconds / 31536000);
        var numdays = Math.floor((seconds % 31536000) / 86400);
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        return numyears + " years " +  numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";

    }
    console.log(secondsToString(Seconds_Between_Dates));*/
    // 28800000 milliseconds (8 hours)
})