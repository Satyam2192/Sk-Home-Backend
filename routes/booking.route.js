const express = require('express');
const bookingController = require('../controllers/booking.controller');

const router = express.Router();


router.get('/get/', bookingController.getAllBookings);

router.get('/get/:id', bookingController.getBookingById);

router.post('/create', bookingController.createBooking);

router.put('/update/:id', bookingController.updateBooking);

router.delete('/delete/:id', bookingController.deleteBooking);

module.exports = router;
