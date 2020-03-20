const express = require('express');

const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
// const PORT = process.env.PORT || 3000;
const PORT = 3000;



const routes = require('./routes');

app.use(routes);



// app.use(express.static('public'));

app.listen(PORT);