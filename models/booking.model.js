const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true 
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  numberOfParticipants: { 
    type: Number, 
    default: 1 
  },
  totalPrice: { 
    type: Number 
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
