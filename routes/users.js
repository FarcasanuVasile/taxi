const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = required("config");

const User = require("../models/User");
const auth = require("./../middleware/auth");

// Register -- Add user to database
router.post("/", async (req, res) => {
	const { username, email, password, phone } = req.body;

	try {
		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ message: "Email is taken." });
		user = new User({ username, email, password, phone });
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		await user.save();
		const payload = {
			user: { id: user.id },
		};
		jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 1800 }, (error, token) => {
			if (error) throw error;
			res.set({ token });
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Error while saving the user!" });
	}
});

module.exports = router;
