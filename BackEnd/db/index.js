import express from "express";
import userRoutes from '../routes/userRoutes.js';
import vechicleRoutes from '../routes/vechicleRoutes.js';
import bodyParser from 'body-parser';


const app = express();

app.get('/', (req, res) => {
    res.send("Witaj w naszej aplikacji! API jest dostępne na /users");
});

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


//Główny endpoint od manipulacji danymi użytkowników
app.use('/users', userRoutes);

//Główny endpoint od manipulacji danymi pojazdów
app.use('/vechicles', vechicleRoutes);

//Obsługa błędów
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Coś poszło nie tak!');
});

//Głowny port nasłuchujący na backendzie
const port = process.env.PORT || 8800;
app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
});
