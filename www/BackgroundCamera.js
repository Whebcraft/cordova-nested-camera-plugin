var argscheck = require('cordova/argscheck'),
exec = require('cordova/exec');

var cameraExport = {};

cameraExport.init = function(successCallback, errorCallback, options) {
    options = options || {};
    var getValue = argscheck.getValue;

	var locationTop = getValue(options.locationTop, 50);
	var locationLeft = getValue(options.locationLeft, 50);
	var width = getValue(options.width, 200);
	var height = getValue(options.height, 200);
	
	var args = [width, height, locationTop, locationLeft];

    exec(successCallback, errorCallback, "BackgroundCamera", "init", args);
    return true;
};

cameraExport.hide = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "BackgroundCamera", "hide", []);
};


cameraExport.show = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "BackgroundCamera", "show", []);
};

cameraExport.cleanup = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "BackgroundCamera", "cleanup", []);
};

cameraExport.takePhoto = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "BackgroundCamera", "takePhoto", []);
};


module.exports = cameraExport;
