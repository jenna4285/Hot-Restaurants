// Dependencies
const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Star Wars Characters (DATA)
const customers = [
      {
        customerID: 'bob',
        customerName: 'Bob',
        phoneNumber: '222',
        customerEmail: 'hasdkjf',
      },
]
// Routes
// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));
app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
// Displays all customers
app.get('/api/tables', (req, res) =>{
    output = []
    if (customers.length > 5){
        for (x = 0; x < 5; x++){
            output.push(customers[x])
        }
    }
    else{
        for(customer of customers){
            output.push(customer)
        }
    }
    res.json(output)
});

app.get('/api/waitlist', (req, res) => {
    output = []
    if (customers.length>5){
        for(x = 5;x < customers.length;x++){
            output.push(customers[x])
        }
    }
    res.json(output)
});


// Create New Customer - takes in JSON input
app.post('/api/tables', (req, res) => {
  customers.push(req.body)
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
