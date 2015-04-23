//cordova brings a mini amd with it
var 
	r = require('cordova/require'),
	
	//webos cordova service lib
	service = require('cordova/webos/service');
	
	//we want to include this so it can be found later
	//enyo doesn't use define, so when cordova is built, we
	//just register the relevant portions of the lib
	r.define('cordova/webos/service', function(require, exports, module) {
		module.exports = service
	});

	//how we tell cordova what exec and platform to use
	//exec.js and platform.js will export these back to cordova
	window.$cordova  = {
		platform: require('../../cordova-webos/cordova-js-src/platform'),
		exec: require('../../cordova-webos/cordova-js-src/platform')
	};

//run cordova bootstrap now that we have our platform setup
var
	bootstrap = require('cordova/bootstrap');

	module.exports = cordova;