const { resolve } = require('path');



exports.home = (req, res) => {
  res.sendFile(resolve('index.html'))
}

exports.page1 = (req, res) => {
  res.sendFile(resolve('page1.html'))
}

exports.page2 = (req, res) => {
  res.sendFile(resolve('page2.html'))
}
