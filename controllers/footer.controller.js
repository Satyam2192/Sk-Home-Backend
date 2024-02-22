import Footer from '../models/footer.model.js';
import { errorHandler } from '../utils/error.js';

export const createFooter = async (req, res, next) => {
  try {
    const listing = await Footer.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!footer) {
      return res.status(404).json({ message: "Footer not found" });
    }
    res.json(footer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getFooter = async (req, res) => {
    try {
      const footer = await Footer.find();
      res.json(footer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


