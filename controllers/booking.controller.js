const Booking = require('../models/booking.model');
const Tour = require('../models/tour.model');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user tour');
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting Bookings' });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user tour');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting Booking details' });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const tour = await Tour.findById(req.body.tour);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    if (!isValidBookingDate(tour, req.body.bookingDate)) {
      return res.status(400).json({ message: 'Invalid booking date' });
    }

    if (tour.capacity < req.body.numberOfParticipants) {
      return res.status(400).json({ message: 'Not enough capacity on this tour' });
    }

    const totalPrice = tour.price * req.body.numberOfParticipants;

    const newBooking = new Booking({
      user: req.user._id,
      tour: req.body.tour,
      bookingDate: req.body.bookingDate,
      numberOfParticipants: req.body.numberOfParticipants,
      totalPrice: totalPrice
    });

    await newBooking.save();
    tour.capacity -= req.body.numberOfParticipants;
    await tour.save();

    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating Booking' });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const oldTour = await Tour.findById(booking.tour);
    let newTour = oldTour; // Start with the original tour

    // 1. Check if the tour itself has changed
    if (req.body.tour && req.body.tour !== booking.tour.toString()) {
      newTour = await Tour.findById(req.body.tour);
      if (!newTour) {
        return res.status(404).json({ message: 'New tour not found' });
      }
    }

    // 2. Check date changes and tour capacity
    if (req.body.bookingDate && req.body.bookingDate !== booking.bookingDate.toISOString()) {
      if (!isValidBookingDate(newTour, req.body.bookingDate)) {
        return res.status(400).json({ message: 'Invalid booking date' });
      }
    }

    // 3. Handle capacity changes
    const participantDiff = req.body.numberOfParticipants - booking.numberOfParticipants;
    if (participantDiff > newTour.capacity) {
      return res.status(400).json({ message: 'Not enough capacity on this tour' });
    }

    // 4. Update Booking
    booking.tour = newTour._id;
    booking.bookingDate = req.body.bookingDate || booking.bookingDate;
    booking.numberOfParticipants = req.body.numberOfParticipants || booking.numberOfParticipants;
    booking.totalPrice = newTour.price * booking.numberOfParticipants; 
    await booking.save();

    // 5. Update capacities of old and new tours (if necessary)
    oldTour.capacity += booking.numberOfParticipants;  
    await oldTour.save(); 

    newTour.capacity -= participantDiff; 
    await newTour.save(); 

    res.status(200).json(booking); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating Booking' });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const tour = await Tour.findById(booking.tour);
    if (tour) {
      tour.capacity += booking.numberOfParticipants;
      await tour.save();
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting Booking' });
  }
};
