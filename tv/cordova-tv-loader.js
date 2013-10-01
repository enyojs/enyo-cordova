/**
Loads the external Cordova TV modules for webOS TV platform.
*/
//* @protected
(function(){
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
		
		/*
			Inject an inline js text node to check for existence of Cordova as we cannot have a guaranteed
			accurate check at the time cordova-tv-loader.js runs. This is because enyo-cordova dynamically
			adds the cordova js at runtime, so we must check after Cordova is in memory, and only then can we
			add our TV libraries. This allows us to add the TV modules after Cordova but before DOMContentLoaded.
		*/		
		var inline = document.createElement("script");
		var inject = "if(window.cordova || window.PhoneGap) {\n" +
				"enyo.depends.apply(enyo, " + enyo.json.stringify(tvModules) + ");\n" +
				"} else {\n" +
				"enyo.warn(\"Cordova not found, ignoring tv modules\");\n" +
				"}";
		inline.appendChild(document.createTextNode(inject));
		document.getElementsByTagName("head")[0].appendChild(inline);
		
	} else {
		enyo.warn("Platform does not support Cordova TV modules, skipping");
	}
})();
