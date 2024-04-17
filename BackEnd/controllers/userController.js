import db from './db/index.js';

//Kontrole orczytu użytkownika
export const getUsers = (req, res) => {
    const q = "SELECT * FROM `user`";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};


//Kontroler stworzenia użytkownika 
export const createUser = (req, res) => {
    const q = "INSERT INTO user (`Name`, `SurName`, `CourierNumber`, `Role`, `Email`) VALUES (?)"
    const values = [
        req.body.Name,
        req.body.SurName,
        req.body.CourierNumber,
        req.body.Role,
        req.body.Email
    ];
    db.query(q, [values], (err,  data)=> {
        if(err) return res.json(err)
        return res.json(data);
    });
};


//Kontroler Modyfikacji użytkownika
export const updateUser = (req, res) => {
    const userId = req.params.id;
    const { Name, SurName, CourierNumber, Role, Email } = req.body;
    const q = "UPDATE user SET `Name` = ?, `SurName` = ?, `CourierNumber` = ?, `Role` = ?, `Email` = ? WHERE id = ?";
    const values = [Name, SurName, CourierNumber, Role, Email, userId];
    db.query(q, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "User updated successfully" });
    });
};


//Kontroler usuwania użytkownika
export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";
    db.query(q, userId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "User deleted successfully" });
    });
};
