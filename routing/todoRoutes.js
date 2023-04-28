const express = require('express');
const todoController = require('../controllers');
const router = express.Router();

router.get('/todolist', todoController.getTodos);

module.exports = router;
