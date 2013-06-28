enyo.kind({
	name: "cordova.sample.Compass",
	classes: "onyx cordova-sample",
	components: [
		{classes: "cordova-sample-divider", content: "Compass API"},
		{classes: "cordova-sample-tools", components: [
			{kind:"onyx.Button", content: "getCurrentHeading", ontap:"getCurrentHeading"},
			{name:"watchToggle", kind:"onyx.Button", content: "watchHeading", ontap:"toggleWatch"},
		]},
		{kind: "onyx.Groupbox", classes:"cordova-sample-result-box", components: [
			{kind: "onyx.GroupboxHeader", content: "Result"},
			{name:"result", classes:"cordova-sample-result", allowHtml:true, content:"No button tapped yet."}
		]}
	],
	getCurrentHeading: function(inSender, inEvent) {
		if(navigator.compass && navigator.compass.getCurrentHeading) {
			navigator.compass.getCurrentHeading(enyo.bind(this, "compassSuccess"),
					enyo.bind(this, "compassFailure"));
		} else {
			this.$.result.setContent("Compass API not supported on this platform.");
		}
	},
	toggleWatch: function(inSender, inEvent) {
		if(navigator.compass && navigator.compass.watchHeading) {
			if(this.watchID) {
				navigator.compass.clearWatch((this.watchID);
				this.$.result.setContent("Stopped compass heading watching.");
				this.watchID = undefined;
				this.$.watchToggle.setContent("watchHeading");
			} else {
				this.watchID = navigator.compass.watchHeading(enyo.bind(this, "compassSuccess"),
						enyo.bind(this, "compassFailure"), {frequency: 500});
				if(this.watchID) {
					this.$.watchToggle.setContent("clearWatch");
				}
			}
		} else {
			this.$.result.setContent("Compass API not supported on this platform.");
		}
	},
	compassSuccess: function(inResponse) {
		this.$.result.setContent("Magnetic Heading: " + inResponse.magneticHeading + "<br />" +
				"True Heading: " + inResponse.trueHeading + "<br />" +
				"Heading Accuracy: " + inResponse.headingAccuracy + "<br />" +
				"Timestamp: " + inResponse.timestamp);
	},
	compassFailure: function(inError) {
		this.$.result.setContent("Unable to retrieve compass data.");
	}
});