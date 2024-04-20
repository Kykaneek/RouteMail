//Przestrzeń robocza dla Marcin Kociołek 

//Kontroler odczytu, modyfikacji, zapisu i usuwania zlecenia 

import express from 'express';
const router = express.Router();
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder} from '../controllers/ordersController.js';

router.get('/', getAllOrders); // Wydobycie wszystkich zleceń
router.get('/:id', getOrderById); // Wydobycie wszystkich zleceń dla danego ID
router.post('/', createOrder); // Dodanie nowego zlecenia
router.put('/:id', updateOrder); // Aktualizacja zlecenia
router.delete('/:id', deleteOrder); // Usunięcie zlecenia

export default router;