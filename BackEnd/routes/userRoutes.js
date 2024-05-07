import express from 'express';
import { getUsers, createUser, updateUser, deleteUser,getUserById, changePassword } from '../controllers/userController.js';

const router = express.Router();

// http://localhost:8800/ -> Główny link na którym działają endpointy

router.get("/", getUsers);           //endpoint odczytu użytkownika
router.get("/:id", getUserById);        //endpoint odczytu kokretnego użytkownika
router.post("/", createUser);    
router.post("/changepassword/:id", changePassword); //endpoint zmiany hasła
router.put("/:id", updateUser);      //endpoint modyfikacji użytkownika
router.delete("/:id", deleteUser);   //endpoint usunięcia użytkownika

export default router;
