const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
connectDB();

const app = express();

app.use(express.json({ extended: false }));

// Register API routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cars", require("./routes/cars"));
app.use("/api/itineraries", require("./routes/itinerary"));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/src/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
