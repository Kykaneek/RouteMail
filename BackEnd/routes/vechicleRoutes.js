import express from 'express';
import { getVechicle } from '../controllers/vechicleController.js';

const router = express.Router();

router.get("/getVechicle/", getVechicle);


export default router;
