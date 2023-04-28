const express = require('express')
const { resolve } = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(resolve('index.html'))
})

app.get('/page1', (req, res) => {
  res.sendFile(resolve('page1.html'))
})

app.get('/page2', (req, res) => {
  res.sendFile(resolve('page2.html'))
})

app.listen(3000)
