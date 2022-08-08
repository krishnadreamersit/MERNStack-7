import express from 'express';
const router = express.Router();
import { defaultController, homeController, singleController, newController, putController, delController } from '../controllers/homeController.js';
router.get('/', defaultController);
router.get('/persons/', homeController);
router.get('/persons/:pid', singleController);
router.post('/persons/', newController);
router.put('/persons/:pid', putController);
router.delete('/persons/:pid', delController);
export default router;