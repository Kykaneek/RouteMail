const express = require('express');
const router = express.Router();
const ordersController = require('../kontrolki/kontrolka-zlecenia.js');

router.get('/orders', ordersController.getAllOrders); // Wydobycie wszystkich zleceń
router.get('/orders/:id', ordersController.getOrderById); // Wydobycie wszystkich zleceń dla danego ID
router.post('/orders', ordersController.createOrder); // Dodanie nowego zlecenia
router.put('/orders/:id', ordersController.updateOrder); // Aktualizacja zlecenia
router.delete('/orders/:id', ordersController.deleteOrder); // Usunięcie zlecenia

module.exports = router;
