const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/db");

require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const eventRoutes = require("./src/routes/events");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", authRoutes); // Use auth routes
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
}); // just for testing the server

app.post("/api/auth", authRoutes);
app.post("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
