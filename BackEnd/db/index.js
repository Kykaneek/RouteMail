import express from "express";
import userRoutes from '../routes/userRoutes.js';
import vechicleRoutes from '../routes/vechicleRoutes.js';
import bodyParser from 'body-parser';


const app = express();

app.get('/', (req, res) => {
    res.send("Witaj w naszej aplikacji! API jest dostępne na /users");
});

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.use('/vechicles', vechicleRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Coś poszło nie tak!');
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
});
