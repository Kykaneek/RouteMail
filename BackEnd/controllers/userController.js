import db from '../db/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
        console.log(JSON.stringify(result));
        return res.json(result); // Zwróć wynik zapytania
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


export const changePassword = (req, res) => {
    const id = req.params.id;
    const { newPassword } = req.body;
  
    if (!id || !newPassword) {
      return res.status(400).send("Brak danych wymaganych do zmiany hasła");
    }
  
    // Zasalanie nowego hasła przed zapisaniem do bazy danych
    bcrypt.hash(newPassword, 10, (hashErr, hash) => {
      if (hashErr) {
        return res.status(500).send("Błąd podczas hashowania nowego hasła");
      }
  
      // Aktualizacja hasła użytkownika w bazie danych
      db.query('UPDATE user SET password = ? WHERE id = ?', [hash, id], (updateError, updateResults, updateFields) => {
        if (updateError) {
          return res.status(500).send("Błąd podczas aktualizacji hasła");
        }
        res.status(200).send("Hasło zostało pomyślnie zmienione");
      });
    });
  };


  export const login = (req, res) => {
    const Email = req.body.Email;
    const CourierNumber = req.body.CourierNumber;
    const Password = req.body.Password;
    

    let sqlQuery, value;
    if(Email){
      sqlQuery = "SELECT * FROM User WHERE Email = ?"
      value = Email
    }
    else if (CourierNumber) {
      sqlQuery = 'SELECT * FROM user WHERE CourierNumber = ?';
      value = CourierNumber;
      console.log(CourierNumber);
    } 
    else {
      return res.status(400).json({ error: 'Brak danych logowania' });
    }


    
    db.query(sqlQuery, value, (error, results) => {
        if (error) {
            console.error('Błąd logowania:', error);
            return res.status(500).json({ error: 'Błąd logowania użytkownika' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Błędna nazwa użytkownika lub hasło' });
        }
  
        const user = results[0];

        bcrypt.compare(Password, user.Password, (err, isPasswordValid) => {
            if (err || !isPasswordValid) {
                return res.status(401).json({ error: 'Błędne hasło' });
            }

            const token = jwt.sign({ email: user.Email }, 'sekretneHaslo', { expiresIn: '1h' });
            res.json({ token, message: 'Logowanie powiodło się' });
        });
    });
};



// 1. Przy pisaniu FrontEndu zmodyfikować kontrolery dodając modele pod lepszą organizację danych
// 2. Zwrócić uwagę na autoryzację i rejestrację użytkownika wraz z zabezpieczeniem hasła
