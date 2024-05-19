// Przestrzeń robocza dla Daniel Plata
import express from 'express';
import { getAdresses,  getAdressesByVillageId, createAdresses, updateAdresses, deleteAdresses } from '../controllers/adressesControler.js';


//Endpointy Kontrolerów Adresów i miejscowości(Głównie miejscowości)

const router = express.Router();

router.get("/", getAdresses);
router.get("/:id", getAdresses);
router.get("/", getAdressesByVillageId);
router.post("/",  createAdresses);
router.put("/:id", updateAdresses);
router.delete("/:id", deleteAdresses);

export default router;