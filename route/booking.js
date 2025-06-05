const express = require("express");
const { createBooking } = require("../controllers/booking");

const router = express.Router();

router.post("/createBook", createBooking);

module.exports = router;
