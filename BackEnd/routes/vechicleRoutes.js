import express from 'express';
import { getVechicle, getVehicleById, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vechicleController.js';

const router = express.Router();

router.get("/", getVechicle);
router.get("/:id", getVehicleById);
router.post("/",  createVehicle);
router.put("/:id", updateVehicle);
router.delete("/:id", deleteVehicle);

export default router;
