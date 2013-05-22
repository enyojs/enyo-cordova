/**
Loads the cordova.js file for the current platform.
*/
//* @protected
(function(ctx){
	if(!window.cordova) {
		var cordovaVersion = ctx.useCordovaVersion || "2.7.0";
		var cordovaSupport = [
			{platform: "android"},
			{platform: "ios"},
			{platform: "webos"},
			{platform: "windowsPhone", version: 7, cordovaFilename: "wp7"},
			{platform: "windowsPhone", version: 8, cordovaFilename: "wp8"},
			{platform: "webos"},
			{platform: "blackberry"}
		];
		for (var i=0; i<platforms.length; i++) {
			var c = cordovaSupport[i];
			var p = enyo.platform[c.platform];
			if (p) {
				if (c.version >= p) {
					var fn = "cordova-js-" + cordovaVersion + "/cordova." + (c.cordovaFilename || c.platform) + ".js";
					enyo.depends(fn);
					return;
				}
			}
		}
		enyo.warn("cordova.js not loaded: Current platform not supported.");
	} else {
		enyo.warn("external cordova.js build in use, skipping script injection");
	}
})(window);
