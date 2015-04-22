var
	webos = require('../../cordova-webos/cordova-js-src/platform'),
	modulemapper = require('cordova/modulemapper');

var 
	service = require('cordova/webos/service');
	
	define('cordova/webos/service', function(require, exports, module) {
		module.exports = service
	});

	webos.bootstrap();

	modulemapper.mapModules(window);

	module.exports = webos;