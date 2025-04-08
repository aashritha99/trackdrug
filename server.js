const express = require("express");
const connectDB = require("./backend/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware to parse JSON

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("🚀 DrugTrack API is working");
});

app.listen(PORT, () => {
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});

