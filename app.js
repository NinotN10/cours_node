const express = require('express');
const { resolve } = require('path');
const router = require("./routing/index.js")
const app = express();



app.set('view engine', 'pug');

// CONFIG
app.use(express.static(resolve('static')));

app.use(express.json());

app.use(router);

module.exports = app;

