window.PLATFORM_VERSION_BUILD_LABEL = 'webos';

var
	r = require('cordova/require');
	window.require = r.require;
	window.define = r.define;

var
	webos = require('cordova/webos'),
	service = require('cordova/webos/service'),
	cordova = require('cordova');

window.cordova = cordova;

webos.bootstrap();

module.exports = webos;