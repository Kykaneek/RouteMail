// db.config.js

import mysql from "mysql";

//dane do logowania z bazą
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"routemail"
})

export default db;
