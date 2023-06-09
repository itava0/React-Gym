const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./queries');
const payment = require('./route/checkout');
const subscription = require('./route/webhook');
const auth = require('./route/auth');

const port = process.env.PORT || 8080;

// Middlewares here
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes here
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.post('/create-checkout-session', payment.submitPayment);
app.post('/webhook', subscription.manageSubcription);

// Authentication endpoint
app.post('/auth/register', auth.registeredUser);
app.post('/auth/login', auth.loginUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
