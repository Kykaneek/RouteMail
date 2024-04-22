import db from '../db/db.js';

//Kontrole odczytu wiosek
export const getVillages = (req, res) => { 
    const q = "SELECT * FROM village;"; 
    db.query(q, (err, data) => { 
        if (err) return res.json(err); 
        return res.json(data);
    });
};

// Kontroler tworzenia wiosek
export const createVillages = (req, res) => {
    const q = "INSERT INTO village (`Village_Name`, `PostCode`) VALUES (?)";
    const values = [
        req.body.Village_Name,
        req.body.PostCode,
    ];
    db.query(q, [values], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
};

// Kontroler modyfikacji wiosek
export const updateVillages = (req, res) => {
    const villageId = req.params.id;
    const { Village_Name, PostCode} = req.body;

    const q = "UPDATE village SET `Village_Name` = ?, `PostCode` = ? WHERE id = ?";
    const values = [Village_Name, PostCode, villageId];

    db.query(q, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json();
    });
};



//Kontroler usuwania wiosek
export const deleteVillages = (req, res) => {
    const villageId = req.params.id; 
    const q = "DELETE FROM village WHERE id = ?";
    db.query(q, villageId, (err, result) => { 
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json();
    });
};