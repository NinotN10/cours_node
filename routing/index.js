const express = require('express');
const router = express.Router();
const controllers = require("../controllers");

router.get('/', controllers.home);
router.get('/page1', controllers.page1);
router.get('/page2', controllers.page2);

// Routes de Todolist
router.get('/todolist', controllers.getTodos);
router.get('/todolist/:id', controllers.getTodoById);
router.post('/todolist', express.json(), controllers.createTodo);
router.put('/todolist/:id', express.json(), controllers.updateTodo);
router.delete('/todolist/:id', controllers.deleteTodo);

router.get('*', (req, res) => {
  // res.sendFile(resolve('page404.html'));
  res.redirect('/');
});

module.exports = router;
