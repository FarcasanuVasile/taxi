const mongoose = require("mongoose");

const ItinerarySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	from: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("itinerary", ItinerarySchema);
