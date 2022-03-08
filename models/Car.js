const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
	make: {
		type: String,
	},
	model: {
		type: String,
	},
	plate: {
		type: String,
	},
	image: {
		type: String,
	},
});

module.exports = mongoose.model("car", CarSchema);
