/**
Loads the external Cordova TV modules for webOS TV platform.
*/
//* @protected
(function(ctx){
	if(ctx.cordova || ctx.PhoneGap) {
		if(window.PalmSystem && (!enyo.platform.webos || enyo.platform.webos>3)) {
			var cordovaTVVersion = ctx.useCordovaTVVersion || "3.0";
			var tvModules = [
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/advertisement.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/billing.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/broadcast.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/camera.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/deviceinfo.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/drmagent.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/mrcu.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/push.js",
				"/usr/palm/frameworks/cordova-tv/" + cordovaTVVersion + "/upnp.js"
			];
			enyo.depends.apply(enyo, tvModules);
		} else {
			enyo.warn("Platform does not support Cordova TV modules, skipping");
		}
	} else {
		enyo.warn("Cordova not found, ignoring tv modules");
	}
})(window);
