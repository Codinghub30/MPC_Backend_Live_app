const express = require("express");
const connectDB = require("./db");
const booking = require("./route/booking.js");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/book", booking);
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log("The server is running at", PORT);
});
