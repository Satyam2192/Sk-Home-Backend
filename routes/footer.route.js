import express from 'express';
import { createFooter, updateFooter, getFooter } from '../controllers/footer.controller.js';

const router = express.Router();

router.post('/create', createFooter);
router.put('/update/:id', updateFooter);
router.get('/get', getFooter);

export default router;