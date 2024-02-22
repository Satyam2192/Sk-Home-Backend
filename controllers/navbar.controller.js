import Navbar from '../models/navbar.model.js';
import { errorHandler } from '../utils/error.js';

export const createNavbar = async (req, res, next) => {
  try {
    const listing = await Navbar.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const updateNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!navbar) {
      return res.status(404).json({ message: "Navbar not found" });
    }
    res.json(navbar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getNavbar = async (req, res) => {
    try {
      const navbar = await Navbar.find();
      res.json(navbar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


