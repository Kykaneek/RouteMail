import express from 'express';
import { getUsers, createUser, updateUser, deleteUser  } from '../controllers/userController.js';



const router = express.Router();

router.get("/getUser/", getUsers);
router.post("/createUser/", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

router.get("/getVechicle/", getVechicle);

export default router;
