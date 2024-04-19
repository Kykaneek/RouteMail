//Przestrzeń robocza dla Marcin Kociołek 

//Kontroler odczytu, modyfikacji, zapisu i usuwania zlecenia 

//Kontroler odczytu, modyfikacji, zapisu i usuwania zadania zlecenia

import express from 'express';
const router = express.Router();
//const ordersController = require('../controllers/ordersController.js');
//const orderItemController = require('../controllers/ordersController.js');
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, getAllOrderItems, getOrderItemById, createOrderItem, updateOrderItem, deleteOrderItem } from '../controllers/ordersController.js';

router.get('/orders', getAllOrders); // Wydobycie wszystkich zleceń
router.get('/orders/:id', getOrderById); // Wydobycie wszystkich zleceń dla danego ID
router.post('/orders', createOrder); // Dodanie nowego zlecenia
router.put('/orders/:id', updateOrder); // Aktualizacja zlecenia
router.delete('/orders/:id', deleteOrder); // Usunięcie zlecenia

router.get('/orderItems', getAllOrderItems); // Wydobycie wszystkich elementów zlecenia
router.get('/orderItems/:id', getOrderItemById); // Wydobycie wszystkich elementów zlecenia dla danego ID
router.post('/orderItems', createOrderItem); // Dodanie nowej pozycji zlecenia
router.put('/orderItems/:id', updateOrderItem); // Aktualizacja pozycji zlecenia
router.delete('/orderItems/:id', deleteOrderItem); // Usunięcie pozycji zlecenia

export default router;