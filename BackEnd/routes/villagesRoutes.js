// Przestrzeń robocza dla Daniel Plata
import express from 'express';
import { getVillages, createVillages, updateVillages, deleteVillages } from '../controllers/villagesControler.js';


//Endpointy Kontrolerów Wiosek

const router = express.Router();

router.get("/", getVillages);
router.get("/:id", getVillages);
router.post("/",  createVillages);
router.put("/:id", updateVillages);
router.delete("/:id", deleteVillages);

export default router;