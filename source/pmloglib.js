/** 
	Convenience wrapper around PmLogLib logging API        
	
	TODO: Move into Cordova-webOS proper
*/

(function() {
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
	// Log function stringifies and escapes keyVals, and passes to PmLogString
	var log = function(level, messageId, keyVals, freeText) {
		if (window.PalmSystem) {
			var kv = JSON.stringify(keyVals).replace("\\", "\\\\").replace("\"", "\\\"");
			window.PalmSystem.PmLogString(level, messageId, kv, freeText);
		}
	};
	// The exported API
	window.webOSLog = {
		none: function(messageId, keyVals, freeText) {
			log(levelNone, messageId, keyVals, freeText);
		},
		emergency: function(messageId, keyVals, freeText) {
			log(levelEmergency, messageId, keyVals, freeText);
		},
		alert: function(messageId, keyVals, freeText) {
			log(levelAlert, messageId, keyVals, freeText);
		},
		critical: function(messageId, keyVals, freeText) {
			log(levelCritical, messageId, keyVals, freeText);
		},
		error: function(messageId, keyVals, freeText) {
			log(levelError, messageId, keyVals, freeText);
		},
		warning: function(messageId, keyVals, freeText) {
			log(levelWarning, messageId, keyVals, freeText);
		},
		notice: function(messageId, keyVals, freeText) {
			log(levelNotice, messageId, keyVals, freeText);
		},
		info: function(messageId, keyVals, freeText) {
			log(levelInfo, messageId, keyVals, freeText);
		},
		debug: function(messageId, keyVals, freeText) {
			log(levelDebug, messageId, keyVals, freeText);
		}
	};
}());