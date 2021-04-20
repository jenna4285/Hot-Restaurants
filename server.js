const express = require('express')
const path = require('path');

const app = express()

// route home
// route view
// route add

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

