import db from '../db/db.js';

//Kontrole odczytu pojazdu
export const getVechicle = (req, res) => {
    const q = "SELECT * FROM `vechicle`";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

//Kontroler odczytu konkretnego pojazdu 
export const getVehicleById = (req, res) => {
    const vehicleId = req.params.id;
    const query = "SELECT * FROM vechicle WHERE id = ?";
    db.query(query, [vehicleId], (err, results) => {
        if(err) return res.json(err)
        return res.json(data);
    });
};

//Kontroler dodania nowego pojazdu 

export const createVehicle = (req, res) => {
    const q = "INSERT INTO vechicle (`Name`, `Model`, `InUse`) VALUES (?, ?, ?)";
    const values = [
        req.body.Name,
        req.body.Model,
        req.body.InUse
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

// Kontroler modyfikacji pojazdu 
export const updateVehicle = (req, res) => {
    const UserId = req.params.id;
    const q = "UPDATE vechicle set `Name` = ? , `Model` =? , `InUse` =? WHERE id = ? ";
    const values = [
        req.body.Name,
        req.body.Model,
        req.body.InUse,
        UserId
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

//Kontroler usunięcia konkretnego pojazdu 
export const deleteVehicle = (req, res) => {
    const vehicleId = req.params.id;
    const query = "DELETE FROM vechicle WHERE id = ?";
    db.query(query, [vehicleId], (err, results) => {
        if(err) return res.status(500).json(err);
        return res.json();
    });
};
/** 
export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM user WHERE id = ?"; //Usuń użytkownika o tym ID
    db.query(q, userId, (err, result) => { 
        if (err) return res.status(500).json(err); //Zwróć komunikat o błędzie 
        return res.json(); //Zwróć informacje o usuniętych danych
    });
};*/