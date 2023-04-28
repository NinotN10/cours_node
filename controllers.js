const { resolve } = require('path');
const fs = require('fs');


exports.home = (req, res) => {
  res.render('index')
}

exports.page1 = (req, res) => {
  res.render('page1')
}

exports.page2 = (req, res) => {
  res.render('page2')
}



const path = require('path');

const dataPath = resolve(__dirname, 'data.json');

exports.getTodos = (req, res) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const parsedData = JSON.parse(data);
      res.status(200).json(parsedData.todos);
    }
  });
};
