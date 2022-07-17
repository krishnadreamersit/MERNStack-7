import express from 'express';
const router = express.Router();

import {homeController, formController} from '../controllers/homeController.js';

router.get('/', homeController);
router.post('/getValues1', formController);

export default router;
