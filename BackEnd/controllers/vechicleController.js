import db from './db/index.js';

//Kontrole odczytu pojazdu
export const getVechicle = (req, res) => {
    const q = "SELECT * FROM `vechicle`";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

