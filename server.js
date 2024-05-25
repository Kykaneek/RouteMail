const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bazadanych'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/addMapData', (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude || !latitude.degrees || !latitude.minutes || !latitude.seconds || !latitude.direction || 
      !longitude.degrees || !longitude.minutes || !longitude.seconds || !longitude.direction) {
    return res.status(400).json({ error: 'Brak wymaganych pól w danych wejściowych' });
  }

  const mapData = {
    AddressCords: {
      latitude: {
        degrees: latitude.degrees,
        minutes: latitude.minutes,
        seconds: latitude.seconds,
        direction: latitude.direction
      },
      longitude: {
        degrees: longitude.degrees,
        minutes: longitude.minutes,
        seconds: longitude.seconds,
        direction: longitude.direction
      }
    }
  };

  const q = "INSERT INTO `adresses` (AdressCords) VALUES (?)";
  const mapDataJson = JSON.stringify(mapData);

  db.query(q, [mapDataJson], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Wystąpił błąd podczas dodawania danych mapy' });
    }
    return res.status(201).json({ message: 'Dane mapy zostały dodane pomyślnie' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
