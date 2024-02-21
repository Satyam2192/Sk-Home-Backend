const Tour = require('../models/tour.model');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting tours' });
  }
};

// Get details of a specific tour
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting tour details' });
  }
};

// Create a new tour
exports.createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating tour' });
  }
};

// Update a tour
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating tour' });
  }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting tour' });
  }
};
