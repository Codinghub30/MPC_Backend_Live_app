const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
    });
    console.log("The Db is connected successfully");
  } catch (error) {
    console.log("The Error occured in DB", error);
  }
};

module.exports = connectDB;
