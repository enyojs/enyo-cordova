/**
 * Loads the external Cordova TV modules for webOS TV platform.
 */
(function(enyo, scope) {
	if(scope.cordova || scope.PhoneGap) {
		var v = scope.useCordovaTVVersion||"3.0";
		var externalModules = [
			"/usr/palm/frameworks/cordova-tv/" + v + "/advertisement.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/billing.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/broadcast.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/camera.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/deviceinfo.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/drmagent.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/mrcu.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/push.js",
			"/usr/palm/frameworks/cordova-tv/" + v + "/upnp.js"
		];
		enyo.load(externalModules);
	} else {
		enyo.warn("Cordova not found, ignoring tv modules");
	}
})(enyo, window);
