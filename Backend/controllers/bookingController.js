const asyncHandler = require('express-async-handler');
const Booking = require('../models/bookingModel');


const createBooking = asyncHandler(async (req, res) => {
  const { bookingType, serviceId, startDate, endDate, totalPrice } = req.body;

  const booking = await Booking.create({
    user: req.user._id,
    bookingType,
    serviceId,
    startDate,
    endDate,
    totalPrice,
  });

  res.status(201).json(booking);
});

const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });
  res.json(bookings);
});

module.exports = {
  createBooking,
  getUserBookings,
};