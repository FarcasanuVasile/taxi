const express = require("express");
const router = express.Router();

const Car = require("../models/Car");

// Get Cars
router.get("/", async (req, res) => {
	try {
		const cars = await Car.find();
		res.status(200).send({ data: cars });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: "An error occured while loading the cars", error });
	}
});

router.post("/", async (req, res) => {
	const { make, model, image, plate } = req.body;
	const car = new Car({ make, model, plate, image });

	try {
		await car.save();
		return res.status(200).send({ message: "Car saved succefully!", car });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send({ message: "An error occured while saving the car", error });
	}
});

module.exports = router;
