const express = require('express');
const router = express.Router();
const orderItemController = require('../kontrolki/kontrolka-zlecenia-item.js');

router.get('/orderItems', orderItemController.getAllOrderItems); // Wydobycie wszystkich elementów zlecenia
router.get('/orderItems/:id', orderItemController.getOrderItemById); // Wydobycie wszystkich elementów zlecenia dla danego ID
router.post('/orderItems', orderItemController.createOrderItem); // Dodanie nowej pozycji zlecenia
router.put('/orderItems/:id', orderItemController.updateOrderItem); // Aktualizacja pozycji zlecenia
router.delete('/orderItems/:id', orderItemController.deleteOrderItem); // Usunięcie pozycji zlecenia

module.exports = router;
