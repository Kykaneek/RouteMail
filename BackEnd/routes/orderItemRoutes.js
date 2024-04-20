//Kontroler odczytu, modyfikacji, zapisu i usuwania zadania zlecenia

import express from 'express';
const router = express.Router();
import { getAllOrderItems, getOrderItemById, createOrderItem, updateOrderItem, deleteOrderItem } from '../controllers/ordersController.js';


router.get('/', getAllOrderItems); // Wydobycie wszystkich elementów zlecenia
router.get('/id', getOrderItemById); // Wydobycie wszystkich elementów zlecenia dla danego ID
router.post('/', createOrderItem); // Dodanie nowej pozycji zlecenia
router.put('/:id', updateOrderItem); // Aktualizacja pozycji zlecenia
router.delete('/:id', deleteOrderItem); // Usunięcie pozycji zlecenia

export default router;