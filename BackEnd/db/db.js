// db.config.js


import mysql from 'mysql';

//dane do logowania z bazą
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"routmail"
})


export default db;
