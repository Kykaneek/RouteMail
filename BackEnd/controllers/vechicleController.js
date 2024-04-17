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
    const query = "SELECT * FROM Vechicle WHERE id = ?";
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