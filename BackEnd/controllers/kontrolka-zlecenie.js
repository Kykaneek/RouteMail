const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

exports.getAllOrders = (req, res) => {
  connection.query('SELECT * FROM Orders', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
};

exports.getOrderById = (req, res) => {
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

exports.createOrder = (req, res) => {
    const { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated } = req.body;
    const order = { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated };
    connection.query('INSERT INTO Orders SET ?', order, (error, results, fields) => {
      if (error) throw error;
      res.status(201).json({ message: 'Zlecenie dodane', orderId: results.insertId });
    });
  };
  
  exports.updateOrder = (req, res) => {
    const orderId = req.params.id;
    const { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated } = req.body;
    const updatedOrder = { NumberOfOrder, MainVillageId, isRealizing, UserId, DateCreated };
    connection.query('UPDATE Orders SET ? WHERE id = ?', [updatedOrder, orderId], (error, results, fields) => {
      if (error) throw error;
      res.json({ message: 'Zlecenie zaktualizowane', orderId: orderId });
    });
  };
  
  exports.deleteOrder = (req, res) => {
    const orderId = req.params.id;
    connection.query('DELETE FROM Orders WHERE id = ?', [orderId], (error, results, fields) => {
      if (error) throw error;
      res.json({ message: 'Zlecenie usunięte', orderId: orderId });
    });
  };
