enyo.kind({
	name: "cordova.sample.Accelerometer",
	classes: "onyx cordova-sample",
	components: [
		{classes: "cordova-sample-divider", content: "Accelerometer API"},
		{classes: "cordova-sample-tools", components: [
			{kind:"onyx.Button", content: "getCurrentAcceleration", ontap:"getCurrentAcceleration"},
			{name:"watchToggle", kind:"onyx.Button", content: "watchAcceleration", ontap:"toggleWatch"},
		]},
		{tag:"br"},
		{kind: "onyx.Groupbox", classes:"cordova-sample-result-box", components: [
			{kind: "onyx.GroupboxHeader", content: "Result"},
			{name:"result", classes:"cordova-sample-result", allowHtml:true, content:"No button tapped yet."}
		]}
	],
	getCurrentAcceleration: function(inSender, inEvent) {
		if(navigator.accelerometer && navigator.accelerometer.getCurrentAcceleration) {
			navigator.accelerometer.getCurrentAcceleration(enyo.bind(this, "accelSuccess"),
					enyo.bind(this, "accelFailure"));
		} else {
			this.$.result.setContent("Accelerometer API not supported on this platform.");
		}
		return true;
	},
	toggleWatch: function(inSender, inEvent) {
		if(navigator.accelerometer && navigator.accelerometer.watchAcceleration) {
			if(this.watchID) {
				navigator.accelerometer.clearWatch(this.watchID);
				this.$.result.setContent("Stopped acceleration watching.");
				this.watchID = undefined;
				this.$.watchToggle.setContent("watchAcceleration");
			} else {
				this.watchID = navigator.accelerometer.watchAcceleration(enyo.bind(this, "accelSuccess"),
						enyo.bind(this, "accelFailure"), {frequency: 3000});
				if(this.watchID) {
					this.$.watchToggle.setContent("clearWatch");
				}
			}
		} else {
			this.$.result.setContent("Accelerometer API not supported on this platform.");
		}
		return true;
	},
	accelSuccess: function(inResponse) {
		this.$.result.setContent("Acceleration X: " + inResponse.x + "<br />" +
				"Acceleration Y: " + inResponse.y + "<br />" +
				"Acceleration Z: " + inResponse.z + "<br />" +
				"Timestamp: " + inResponse.timestamp);
	},
	accelFailure: function(inError) {
		this.$.result.setContent("Unable to retrieve accelerometer data.");
	}
});