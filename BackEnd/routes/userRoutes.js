import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// http://localhost:8800/ -> Główny link na którym działają endpointy

router.get("/", getUsers);           //endpoint odczytu użytkownika
router.post("/", createUser);        //endpoint dodania użytkownika
router.put("/:id", updateUser);      //endpoint modyfikacji użytkownika
router.delete("/:id", deleteUser);   //endpoint usunięcia użytkownika

export default router;
