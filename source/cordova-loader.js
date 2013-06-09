/**
Loads the cordova.js file for the current platform.
*/
//* @protected
(function(ctx){
	if(!ctx.cordova && !ctx.PhoneGap) {
		var cordovaVersion = ctx.useCordovaVersion || "2.7.0";
		var cordovaSupport = [
			{platform: "android"},
			{platform: "ios"},
			{platform: "webos"},
			{platform: "windowsPhone", version: 8, cordovaFilename: "wp8"},
			{platform: "windowsPhone", version: 7, cordovaFilename: "wp7"},
			{platform: "blackberry"}
		];
		for (var i=0; i<cordovaSupport.length; i++) {
			var c = cordovaSupport[i];
			var p = enyo.platform[c.platform];
			if (p) {
				if (!c.version || p >= c.version) {
					var fn = "$lib/enyo-cordova/source/cordova-js-" + cordovaVersion + "/cordova." + (c.cordovaFilename || c.platform) + ".js";
					enyo.depends(fn);
					return;
				}
			}
		}
		enyo.warn("Cordova not loaded: Current platform not supported.");
	} else {
		enyo.warn("External cordova.js build in use, skipping script injection");
	}
})(window);
