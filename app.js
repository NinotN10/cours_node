const express = require('express');
const { resolve } = require('path');
const router = require("./routing/index.js")
const app = express();

// CONFIG
app.use(express.static(resolve('static')));
app.use(router)

module.exports = app;
