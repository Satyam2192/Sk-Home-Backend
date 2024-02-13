import express from 'express';
import { createNavbar, updateNavbar, getNavbar} from "../controllers/navbar.controller.js"

const router = express.Router();

router.post('/create', createNavbar);
router.put('/update/:id', updateNavbar);
router.get('/get', getNavbar);

export default router;