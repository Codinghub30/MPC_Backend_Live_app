// import booking from "../model/booking";
const Booking = require("../model/booking");

module.exports.createBooking = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      fatherName,
      motherName,
      workEmail,
      serviceType,
    } = req.body;

    const newBooking = new Booking({
      fullName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      fatherName,
      motherName,
      workEmail,
      serviceType,
    });

    await newBooking.save();
    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error, could not create booking" });
  }
};
