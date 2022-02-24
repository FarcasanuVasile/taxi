const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

// Login
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.status(200).send(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: "An error occured while login the user!", error: error });
	}
});

router.post("/", async (req, res) => {
	const { email, password } = req.body;
	let user = await User.findOne({ email });
	if (!user) return res.status(404).send({ message: "Invalid credentials" });
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) return res.status(404).send({ message: "Invalid credentials" });
	const payload = {
		user: {
			id: user.id,
		},
	};
	jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 1800 }, (error, token) => {
		if (error) throw error;
		res.status(200).send({ token });
	});
});

module.exports = router;
