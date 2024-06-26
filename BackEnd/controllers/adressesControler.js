import db from '../db/db.js';

//Kontroler odczytu, modyfikacji, zapisu i usuwania Miejscowości 

//Kontroler odczytu, modyfikacji, zapisu i usuwania Adresu

//Kontrole odczytu adresów
export const getAdresses = (req, res) => {
    const q = "SELECT * FROM `adresses`";
 
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych adresów' });
        }
 
        const parsedData = data.map(row => {
            const addressCords = row.AdressCords ? JSON.parse(row.AdressCords) : {};
            return {
                ...row,
                AdressCords: addressCords
            };
        });
        return res.json(parsedData);
    });
};

export const getAdressesByVillageId = (req, res) => {
    const villageId = req.params.id;

    if (!villageId) {
        return res.status(400).json({ error: "VillageId is required" });
    }

    console.log("Received data:", villageId);

    const q = "SELECT * FROM `adresses` WHERE `VillageId` = ?";

    console.log(villageId);

    db.query(q, [villageId], (err, data) => {
        if (err) return res.json(err);

        const parsedData = data.map(row => {
            const addressCords = row.AdressCords ? JSON.parse(row.AdressCords) : {};
            return {
                ...row,
                AdressCords: addressCords // Ustawienie AdressCords na pusty obiekt, jeśli jest null
            };
        });

        return res.json(parsedData); // Zwrócenie sparsowanych danych
    });
};



// Kontroler tworzenia adresów
export const createAdresses = (req, res) => {
    const { HouseNumber, VillageId, AdressCords } = req.body;

    // Sprawdzenie, czy wszystkie wymagane pola zostały przekazane
    if (!HouseNumber || !VillageId || !AdressCords) {
        return res.status(400).json({ error: 'Brak wymaganych pól w danych wejściowych' });
    }

    // Przygotowanie zapytania SQL do wstawienia nowego rekordu
    const q = "INSERT INTO `adresses` (HouseNumber, VillageId, AdressCords) VALUES (?, ?, ?)";

    // Konwersja AdressCords na format JSON
    const adressCordsJson = JSON.stringify(AdressCords);

    // Wykonanie zapytania do bazy danych
    db.query(q, [HouseNumber, VillageId, adressCordsJson], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Wystąpił błąd podczas dodawania nowego adresu' });
        }
        return res.status(201).json({ message: 'Adres został dodany pomyślnie' });
    });
};



// Kontroler modyfikacji adresów
// Kontroler modyfikacji adresów
export const updateAdresses = (req, res) => {
    const addressId = req.params.id;
    const { VillageId, HouseNumber, AdressCords } = req.body;

    // Sprawdź, czy AddressCords istnieje w ciele żądania i jest obiektem
    if (!AdressCords || typeof AdressCords !== 'object') {
        return res.status(400).json(err);
    }

    const q = "UPDATE adresses SET `VillageId` = ?, `HouseNumber` = ?, `AdressCords` = ? WHERE id = ?";
    const values = [VillageId, HouseNumber, JSON.stringify(AdressCords), addressId];

    db.query(q, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json();
    });
};



//Kontroler usuwania adresów
export const deleteAdresses = (req, res) => {
    const addressId = req.params.id; // Poprawiono z AdressesId na addressId
    const q = "DELETE FROM Adresses WHERE id = ?";
    db.query(q, addressId, (err, result) => { // Poprawiono z AdressesId na addressId
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(); // Poprawiono z "Adresses" na "Address"
    });
};
