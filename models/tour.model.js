const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrls: {
    type: Array,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  recurrence: {
    type: String,
    enum: ['Daily', 'Weekly'],
    required: true,
  },
  selectedDays: {
    type: [String],
    default: [],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
});

module.exports = mongoose.model('Tour', tourSchema);
