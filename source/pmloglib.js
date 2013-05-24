/** 
	Convenience wrapper around PmLogLib logging API        
	
	TODO: Move into Cordova-webOS proper
*/

(function() {
	//* @protected

	// Log level constants
	var levelNone      = -1;
	var levelEmergency =  0;
	var levelAlert     =  1;
	var levelCritical  =  2;
	var levelError     =  3;
	var levelWarning   =  4;
	var levelNotice    =  5;
	var levelInfo      =  6;
	var levelDebug     =  7;
	var isObject = function(obj) {
		return !!obj && (typeof obj === "object") && (Object.prototype.toString.call(obj) !== "[object Array]");
	};

	// Log function stringifies and escapes keyVals, and passes to PmLogString
	var log = function(level, messageId, keyVals, freeText) {
		if (window.PalmSystem) {
			if (keyVals && !isObject(keyVals)) {
				level = levelError;
				keyVals = { msgid: messageId };
				messageId = "MISMATCHED_FMT";
				freeText = null;
				console.warn("webOSLog called with invalid format: keyVals must be an object");
			}
			if (!messageId && level != levelDebug) {
				console.warn("webOSLog called with invalid format: messageId was empty");
			}
			if (keyVals) {
				keyVals = JSON.stringify(keyVals);
			}
			window.PalmSystem.PmLogString(level, messageId, keyVals, freeText);
		}
	};

	// The exported API
	window.webOS = window.webOS || {};

	//* @public

	//* Call PalmSystem.PmLogString with "emergency" level
	window.webOS.emergency = function(messageId, keyVals, freeText) {
		log(levelEmergency, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "alert" level
	window.webOS.alert = function(messageId, keyVals, freeText) {
		log(levelAlert, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "critical" level
	window.webOS.critical = function(messageId, keyVals, freeText) {
		log(levelCritical, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "error" level
	window.webOS.error = function(messageId, keyVals, freeText) {
		log(levelError, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "warning" level
	window.webOS.warning = function(messageId, keyVals, freeText) {
		log(levelWarning, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "notice" level
	window.webOS.notice = function(messageId, keyVals, freeText) {
		log(levelNotice, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "info" level
	window.webOS.info = function(messageId, keyVals, freeText) {
		log(levelInfo, messageId, keyVals, freeText);
	};
	//* Call PalmSystem.PmLogString with "debug" level.  Note, messageId and keyVals are not allowed.
	window.webOS.debug = function(freeText) {
		log(levelDebug, "", "", freeText);
	};
}());