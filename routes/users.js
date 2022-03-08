const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const auth = require("./../middleware/auth");

// Get users
router.get("/", async (req, res) => {
	try {
		const users = await User.find().sort({ date: -1 });
		res.status(200).send({ data: users });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: "An error ocurred while loading the users!", erorr });
	}
});

// Register -- Add user to database
router.post(
	"/",
	[
		check("username", "Please enter a valid name").isLength({ min: 2 }),
		check("email", "Please enter a valid email").isEmail(),
		check("password", "Please enter a password with 6 or more characters.").isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).send({ data: errors });

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
				res.send({ data: token });
			});
		} catch (error) {
			console.error(error.message);
			res.status(500).send({ message: "Error while saving the user!" }, error);
		}
	}
);

module.exports = router;
