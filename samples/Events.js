enyo.kind({
	name: "cordova.sample.Events",
	classes: "onyx cordova-sample",
	kind:"enyo.Scroller",
	components: [
		{kind:"enyo.Signals", ondeviceready:"deviceready", onpause:"pause", onresume:"resume", ononline:"online", onoffline:"offline", onbackbutton:"backbutton", onbatterycritical:"batterycritical", onbatterylow:"batterylow", onbatterystatus:"batterystatus", onmenubutton:"menubutton", onsearchbutton:"searchbutton", onstartcallbutton:"startcallbutton", onendcallbutton:"endcallbutton", onvolumedownbutton:"volumedownbutton", onvolumeupbutton:"volumeupbutton", onlocalechange:"localechange"},
		{classes: "cordova-sample-divider", content: "Events API"},
		{kind: "onyx.Groupbox", classes:"cordova-sample-result-box", components: [
			{kind: "onyx.GroupboxHeader", content: "Events Supported by enyo.Signals"},
			{name:"supported", classes:"cordova-sample-result", content:"deviceready, pause, resume, online, offline, backbutton, batterycritical, batterylow, batterystatus, menubutton, searchbutton, startcallbutton, endcallbutton, volumedownbutton, volumeupbutton"}
		]},
		{tag:"br"},
		{kind: "onyx.Groupbox", classes:"cordova-sample-result-box", components: [
			{kind: "onyx.GroupboxHeader", content: "Event Monitor"},
			{name:"result", classes:"cordova-sample-result", allowHtml:true, content:"Events API not supported on this platform."}
		]},
	],
	deviceready: function(inSender, inEvent) {
		if(window.PalmSystem) {
			this.$.supported.addContent(", localechange");
		}
		this.$.result.setContent("<i>deviceready</i> event occurred");
	},
	pause: function(inSender, inEvent) {
		this.$.result.addContent("<i>pause</i> event occurred");
	},
	resume: function(inSender, inEvent) {
		this.$.result.addContent("<i>resume</i> event occurred");
	},
	online: function(inSender, inEvent) {
		this.$.result.addContent("<i>online</i> event occurred");
	},
	offline: function(inSender, inEvent) {
		this.$.result.addContent("<i>offline</i> event occurred");
	},
	backbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>backbutton</i> event occurred");
	},
	batterycritical: function(inSender, inEvent) {
		this.$.result.addContent("<i>batterycritical</i> event occurred");
	},
	batterylow: function(inSender, inEvent) {
		this.$.result.addContent("<i>batterylow</i> event occurred");
	},
	menubutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>menubutton</i> event occurred");
	},
	searchbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>searchbutton</i> event occurred");
	},
	startcallbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>startcallbutton</i> event occurred");
	},
	endcallbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>endcallbutton</i> event occurred");
	},
	volumedownbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>volumedownbutton</i> event occurred");
	},
	volumeupbutton: function(inSender, inEvent) {
		this.$.result.addContent("<i>volumeupbutton</i> event occurred");
	},
	localechange: function(inSender, inEvent) {
		this.$.result.addContent("<i>localechange</i> event occurred");
	}
});