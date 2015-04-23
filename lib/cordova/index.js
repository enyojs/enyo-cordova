window.PLATFORM_VERSION_BUILD_LABEL = 'enyo-webos-custom';

//include apache cordova 
//check the specific lib include for platform for magic
//
//webos.js
var
	cordova = require('../cordova-js/src/cordova');

module.exports = window.cordova = cordova;