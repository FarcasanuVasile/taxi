const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	phone: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	isActive: {
		type: Boolean,
		default: true,
	},
	type: {
		type: String,
		default: "user",
	},
});

module.exports = mongoose.model("user", UserSchema);
