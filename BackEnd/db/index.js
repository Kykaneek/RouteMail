import express from "express"; //Import biblioteki exprress do obsługi aplikacji Backend
import userRoutes from '../routes/userRoutes.js'; // Import Endpointów do 
import vechicleRoutes from '../routes/vechicleRoutes.js';
import adressesRoutes from '../routes/adressesRoutes.js';
import OrderRoutes from '../routes/ordersRoutes.js';
import OrderItemRoutes from '../routes/orderItemRoutes.js';
import villagesRoutes from '../routes/villagesRoutes.js';
const app = express(); // Stworzenie instancji aplikacji express.js

app.get('/', (req, res) => { //Strona główna aplikacji BackEnd -> podstawowy endpoint
    res.send("To jest główna strona https//localhost:8800");
});

// Middelware - przetwarza automatycznie zapytania do formatu JSON po protokle HTTP
app.use(express.json()) 

// Middelware - przetwarza, parsuje formularz i udostępnia dane w obiekcie "req.body"
app.use(express.urlencoded({ extended: true })) 



// Główny endpoint od manipulacji danymi użytkowników
//                                  -> Przygotował Krystian Gomółka
app.use('/users', userRoutes);

// Główny endpoint od manipulacji danymi pojazdów 
//                                  -> Przygotował Krystian Gomółka
app.use('/vechicles', vechicleRoutes);

// Tutaj jest miejsce na endpoint od maniupulacji 
//  miejscowościami i adresami 
//                                  -> Przygotowuje Daniel Plata
app.use('/adresses', adressesRoutes);
app.use('/villages', villagesRoutes);


// Tutaj jest miejsce na endpoint od manipulacji zleceniami 
//                                  -> Przygotowuje Marcin Kociołek 
app.use('/orders', OrderRoutes); // dodaje router pod ścieżką /api

app.use('/orderitem', OrderItemRoutes);

//Obsługa błędów
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Wystąpił błąd podczas przesyłu danych!');
});

//Głowny port nasłuchujący na backendzie
const port = process.env.PORT || 8800;
app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
});