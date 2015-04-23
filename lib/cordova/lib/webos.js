var
	r = require('cordova/require');
	window.require = r.require;
	window.define = r.define;
	
	define('cordova', function(require, exports, module) {
		module.exports = cordova
	});

	define('cordova/exec', function(require, exports, module) {
		module.exports = exec
	});
	
	define('cordova/webos/service', function(require, exports, module) {
		module.exports = service
	});
	
var
	global = window || global;

	global.$cordova  = {
		platform: require('../../cordova-webos/cordova-js-src/platform'),
		exec: require('../../cordova-webos/cordova-js-src/platform')
	};

var
	bootstrap = require('cordova/bootstrap'),
	cordova = require('cordova'),
	exec = require('cordova/exec'),
	service = require('cordova/webos/service');


	module.exports = {};