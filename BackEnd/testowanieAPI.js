fetch('http://localhost:3000/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    NumberOfOrder: '12345',
    MainVillageId: 1,
    isRealizing: true,
    UserId: 1,
    DateCreated: '2024-04-18'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Błąd:', error));
