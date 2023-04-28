const express = require('express');
const router = express.Router();
const { resolve } = require('path');
const controllers = require("./constollers")

router.get('/', controllers.home);
router.get('/page1', controllers.page1);
router.get('/page2', controllers.page2);

router.get('*', (req, res) => {
  // res.sendFile(resolve('page404.html'));
  res.redirect('/');
})

module.exports = router;
