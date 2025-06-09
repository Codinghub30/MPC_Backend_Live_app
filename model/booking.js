const express = require("express");
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  email: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  country: { type: String },
  workType: { type: String },
});

module.exports = mongoose.model("Booking", bookingSchema);
