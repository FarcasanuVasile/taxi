const express = require("express");
const router = express.Router();

const Itinerary = require("../models/Itinerary");

router.get("/", async (req, res) => {
	try {
		const itineraries = await Itinerary.find();
		res.status(200).send({ data: itineraries });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: "An error occured while loading the itineraries", error });
	}
});

router.post("/", async (req, res) => {
	const { name, phone, date, from, to, email } = req.body;
	const itinerary = new Itinerary({ name, email, phone, date, from, to });
	try {
		await itinerary.save();
		return res.status(200).send({ message: "Itinerary saved succefully", itinerary });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send({ message: "An error occured while saving the itinerary", error });
	}
});

module.exports = router;
