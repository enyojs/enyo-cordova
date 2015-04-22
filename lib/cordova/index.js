window.PLATFORM_VERSION_BUILD_LABEL = 'enyo-webos-custom';

var
	r = require('cordova/require');
	window.require = r.require;
	window.define = r.define;

var
	cordova = require('../cordova-js/src/cordova.js');

module.exports = window.cordova = cordova;