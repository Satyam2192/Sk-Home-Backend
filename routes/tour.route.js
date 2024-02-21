const express = require('express');
const tourController = require('../controllers/tour.controller');

const router = express.Router();


router.get('/get/', tourController.getAllTours);

router.get('/get/:id', tourController.getTourById);

router.post('/create', tourController.createTour);

router.put('/update/:id', tourController.updateTour);

router.delete('/delete/:id', tourController.deleteTour);

module.exports = router;
