//Przestrzeń robocza Dla Marcin Kociołek
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'routemail'
});

export const getAllOrders = (req, res) => {
  connection.query('SELECT * FROM Orders', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getOrderById = (req, res) => {
  const orderId = req.params.id;
  connection.query('SELECT * FROM Orders WHERE id = ?', [orderId], (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) {
      res.status(404).json({ message: 'Zlecenie nie znalezione' });
    } else {
      res.json(results[0]);
    }
  });
};

export const createOrder = (req, res) => {
    const { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated } = req.body;
    const order = { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated };
    connection.query('INSERT INTO Orders SET ?', order, (error, results, fields) => {
      if (error) throw error;
      res.status(201).json({ message: 'Zlecenie dodane', orderId: results.insertId });
    });
  };
  
export const updateOrder = (req, res) => {
    const orderId = req.params.id;
    const { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated } = req.body;
    const updatedOrder = { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated };
    connection.query('UPDATE Orders SET ? WHERE id = ?', [updatedOrder, orderId], (error, results, fields) => {
      if (error) throw error;
      res.json({ message: 'Zlecenie zaktualizowane', orderId: orderId });
    });
};
  
export const deleteOrder = (req, res) => {
    const orderId = req.params.id;
    connection.query('DELETE FROM Orders WHERE id = ?', [orderId], (error, results, fields) => {
      if (error) throw error;
      res.json({ message: 'Zlecenie usunięte', orderId: orderId });
    });
};

export const getAllOrderItems = (req, res) => {
  connection.query('SELECT * FROM OrderItem', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
};

export const getOrderItemById = (req, res) => {
  const orderItemId = req.params.id;
  connection.query('SELECT * FROM OrderItem WHERE id = ?', [orderItemId], (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) {
      res.status(404).json({ message: 'Pozycja zlecenia nie znaleziona' });
    } else {
      res.json(results[0]);
    }
  });
};

export const createOrderItem = (req, res) => {
  const { OrderId, PositionOnRoute, AdressesId, RouteToPoint, IsRealizated, TypeOfDevilery } = req.body;
  const orderItem = { OrderId, PositionOnRoute, AdressesId, RouteToPoint, IsRealizated, TypeOfDevilery };
  connection.query('INSERT INTO OrderItem SET ?', orderItem, (error, results, fields) => {
    if (error) throw error;
    res.status(201).json({ message: 'Pozycja zlecenia dodana', orderItemId: results.insertId });
  });
};

export const updateOrderItem = (req, res) => {
  const orderItemId = req.params.id;
  const { OrderId, PositionOnRoute, AdressesId, RouteToPoint, IsRealizated, TypeOfDevilery } = req.body;
  const updatedOrderItem = { OrderId, PositionOnRoute, AdressesId, RouteToPoint, IsRealizated, TypeOfDevilery };
  connection.query('UPDATE OrderItem SET ? WHERE id = ?', [updatedOrderItem, orderItemId], (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'Pozycja zlecenia zaktualizowana', orderItemId: orderItemId });
  });
};

export const deleteOrderItem = (req, res) => {
  const orderItemId = req.params.id;
  connection.query('DELETE FROM OrderItem WHERE id = ?', [orderItemId], (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'Pozycja zlecenia usunięta', orderItemId: orderItemId });
  });
};