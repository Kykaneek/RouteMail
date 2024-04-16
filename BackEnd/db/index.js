import express from "express"
import mysql from "mysql"
const app = express();
import userRoutes from './routes/userRoutes.js';

//dane do logowania z bazą
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Krystian123!",
    database:"routemail"
})

app.use('/users', userRoutes);

/*
//podstawowy komunikat 
app.get("/", (req, res)=>  {
    res.json("hello this is the backend");
})

app.get("/getuser", (req, res) => {
    const q = "SELECT * FROM `user`";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.use(express.json())
app.post("/createuser", (req,res)=>{
    const q = "INSERT INTO user (`Name`, `SurName`, `CourierNumber`, `Role`, `Email`) VALUES (?)"
    //const values = ["Krzysztof", "Krzysztofowski","Jakis_nymer","Admin", "mail@mail.com"]
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
    })
})


// Endpoint do aktualizacji użytkownika
app.put("/updateuser/:id", (req, res) => {
    const userId = req.params.id;
    const { Name, SurName, CourierNumber, Role, Email } = req.body;
    const q = "UPDATE user SET `Name` = ?, `SurName` = ?, `CourierNumber` = ?, `Role` = ?, `Email` = ? WHERE id = ?";
    const values = [Name, SurName, CourierNumber, Role, Email, userId];
    db.query(q, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "User updated successfully" });
    });
});

// Endpoint do usuwania użytkownika
app.delete("/deleteuser/:id", (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";
    db.query(q, userId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json({ message: "User deleted successfully" });
    });
});

*/


app.listen(8800, ()=> {
    console.log("Connected to backend!")
})
