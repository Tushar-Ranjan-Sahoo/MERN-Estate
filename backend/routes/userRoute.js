import express from 'express';
import { test } from '../controllers/userController.js';


const router = express.Router();
//make router for the users
router

router.get('/test',test);

export default router;