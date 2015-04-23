//bootstrap the enyo environment
var 
	r = require('cordova/require'),
	exec = require('cordova/exec'),
	global = window || global;
	
	//cordova will need these at some point
	global.require = r.require;
	global.define = r.define;

	var cordova = require('cordova');
	
	//define these for cordova to find, since cordova is built with
	//enyo-dev
	define('cordova', function(require, exports, module) {
		module.exports = cordova
	});

	define('cordova/exec', function(require, exports, module) {
		module.exports = exec
	});

//get cordova boostrap
var
	bootstrap = require('../../cordova-js/src/scripts/bootstrap');

module.exports = bootstrap;