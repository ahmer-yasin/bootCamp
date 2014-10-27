/**
 * Created by AHMER on 10/27/2014.
 */
app.controller('timerCtrl',function($scope,Duration,$localstorage,$http){

  /*  function diff(lat1,lon1,lat2,lon2) {
        var R = 6371; // km
        var φ1 = lat1.toRadians();
        var φ2 = lat2.toRadians();
        var Δφ = (lat2 - lat1).toRadians();
        var Δλ = (lon2 - lon1).toRadians();

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return   var d = R * c;
    }*/
    //Ip get and set
    var locat = $localstorage.getObject('ip');
    var url = "http://ip-api.com/json/?callback=JSON_CALLBACK";
    $http.jsonp(url).success(
        function (s) {
            console.log(s);

            if(s.lat == locat.lat && s.lon == locat.lon){
                $scope.showTime = false;
                $scope.duration = Duration.getDuration();
                $scope.start = function(){
                    $scope.showTime = true;
                    Duration.start();


                $scope.stop = Duration.stop;
                $scope.reset = Duration.reset;
            }
            }else{
                alert('Please login with your workin place network')
            }
        },
        function (e) {
            $scope.error = JSON.stringify(e);
        });
})