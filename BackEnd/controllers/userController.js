import db from '../db/db.js';

//Do testów Kontrolerów i endpointów użyto wtyczki w Visual Studio Code 
// ThunderClient

//Kontrole odczytu użytkownika | METODA GET
export const getUsers = (req, res) => { 
    const q = "SELECT * FROM `user`"; //Wyjęcie wszystkich rekordów
    db.query(q, (err, data) => { //wykonanie zapytania
        if (err) return res.json(err);  //Zwróć komunikat o błędzie
        return res.json(data); // Zwróć dane
    });
};

// Kontroler odczytu użytkownika po ID | METODA GET
export const getUserById = (req, res) => {
    const userId = req.params.id; // Pobranie ID użytkownika z parametrów żądania
    const q = "SELECT * FROM `user` WHERE id = ?"; // Zapytanie SQL pobierające użytkownika po ID
    db.query(q, userId, (err, data) => { // Wykonanie zapytania z przekazanym ID
        if (err) return res.status(500).json({ error: 'Błąd w pobieraniu użytkownika' }); // Obsługa błędu zapytania
        if (data.length === 0) return res.status(404).json({ message: 'Użytkownik o podanym ID nie został znaleziony' }); // Obsługa braku użytkownika o podanym ID
        return res.status(200).json(data[0]); // Zwrócenie danych znalezionego użytkownika
    });
};



//Kontroler stworzenia użytkownika | METODA POST
export const createUser = (req, res) => { //Wprowadż usera do bazy
    const q = "INSERT INTO user (`Name`, `SurName`, `CourierNumber`, `Role`, `Email`) VALUES (?)"
    const values = [
        req.body.Name, //Imię
        req.body.SurName, // Nazwisko 
        req.body.CourierNumber, // Numer kuriera
        req.body.Role, //Rola Administrator / Użytkownik 
        req.body.Email //Email
    ];
    db.query(q, [values], (err,  data)=> {
        if(err) return res.json(err)  //Zwróć komunikat o błędzie
        return res.json(data); // zwróć dane
    });
}; 
//ZMIENIĆ NA MODELE req.body - Tymczasowe rozwiązanie


//Kontroler Modyfikacji użytkownika | METODA PUT
export const updateUser = (req, res) => {
    const userId = req.params.id;
    const { Name, SurName, CourierNumber, Role, Email } = req.body; //Wrzuć zmienne do request body w celu aktualizacji 
    const q = "UPDATE user SET `Name` = ?, `SurName` = ?, `CourierNumber` = ?, `Role` = ?, `Email` = ? WHERE id = ?";
    const values = [Name, SurName, CourierNumber, Role, Email, userId];
    db.query(q, values, (err, result) => { // Wykonaj zapytanie
        if (err) return res.status(500).json(err); // Zwróć komunikat o błędzie 
        return res.json(data); // Zwróć dane
    });
};


//Kontroler usuwania użytkownika | METODA DELETE
export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM user WHERE id = ?"; //Usuń użytkownika o tym ID
    db.query(q, userId, (err, result) => { 
        if (err) return res.status(500).json(err); //Zwróć komunikat o błędzie 
        return res.json(); //Zwróć informacje o usuniętych danych
    });
};


// 1. Przy pisaniu FrontEndu zmodyfikować kontrolery dodając modele pod lepszą organizację danych
// 2. Zwrócić uwagę na autoryzację i rejestrację użytkownika wraz z zabezpieczeniem hasła