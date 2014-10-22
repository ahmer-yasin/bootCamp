/**
 * Created by AHMER on 10/21/2014.
 */
app.factory('bgService',function(){
    var serviceName = 'com.red_folder.phonegap.plugin.backgroundservice.sample.MyService';

    var factory = require('com.red_folder.phonegap.plugin.backgroundservice.BackgroundService')
    module.exports = factory.create(serviceName);


   /* var myService;

    document.addEventListener('deviceready', function() {
        var serviceName = 'com.red_folder.phonegap.plugin.backgroundservice.sample.MyService';
        var factory = cordova.require('com.red_folder.phonegap.plugin.backgroundservice.BackgroundService')
        myService = factory.create(serviceName);

        getStatus();
        }, true);

    function getStatus() {
        myService.getStatus(function(r){displayResult(r)}, function(e){displayError(e)});
        }

    function displayResult(data) {
        alert("Is service running: " + data.ServiceRunning);
        }

    function displayError(data) {
        alert("We have an error");
        }
    return {
        'getStatus':getStatus
    }*/
})