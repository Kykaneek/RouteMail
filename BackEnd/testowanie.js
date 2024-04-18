const express = require('express');
const bodyParser = require('body-parser');
const RoutesTrasyZlecenia = require('./trasy/trasy-zlecenia.js'); // import routera dla trasy-zlecenia
const RoutesTrasyZleceniaItem = require('./trasy/trasy-zlecenia-item.js'); // import routera dla trasy-zlecenia-item

const app = express();
app.use(bodyParser.json());

app.use('/api', RoutesTrasyZlecenia); // dodaje router trasy-zlecenia pod ścieżką /api
app.use('/api', RoutesTrasyZleceniaItem); // dodaje router trasy-zlecenia-item pod ścieżką /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
