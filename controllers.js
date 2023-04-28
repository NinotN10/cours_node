const { resolve } = require('path')
const { randomUUID } = require('crypto')
const { readFile, writeFile } = require('fs/promises')

const todosJSONFile = resolve('data.json')

async function readTodos() {
  const data = await readFile(todosJSONFile, 'utf-8')
  return JSON.parse(data).todos
}

async function writeTodos(todos) {
  await writeFile(todosJSONFile, JSON.stringify({ todos }))
}

exports.home = (req, res) => {
  res.render('index')
}

exports.page1 = (req, res) => {
  res.render('page1')
}

exports.page2 = (req, res) => {
  res.render('page2')
}

exports.getTodos = async (req, res) => {
  const todos = await readTodos()
  res.status(200).json(todos)
};

exports.getTodoById = async (req, res) => {
  const todos = await readTodos()
  const todo = todos.find(todo => todo.id === req.params.id)

  if (!todo) {
    return res.status(404).json({ message: 'Todo introuvable' })
  }

  res.json(todo);
};


exports.createTodo = async (req, res) => {
  const todos = await readTodos()
  const newTodo = {
    id: randomUUID(),
    text: req.body.text,
    done: false
  }

  todos.push(newTodo)
  await writeTodos(todos)

  res.status(201).json(newTodo)
}

exports.updateTodo = async (req, res) => {
  const todos = await readTodos()

  const todoToUpdate = todos.find(todo => todo.id === req.params.id)

  if (!todoToUpdate) {
    return res.status(404).json({ message: 'Todo introuvable' })
  }

  const updatedTodo = { ...todoToUpdate, ...req.body }

  const todoIndex = todos.indexOf(todoToUpdate)
  todos[todoIndex] = updatedTodo

  await writeTodos(todos)
  res.status(200).json(updatedTodo)
}

exports.deleteTodo = async (req, res) => {
  const todos = await readTodos()
  const todoToDelete = todos.find(todo => todo.id === req.params.id)

  if (!todoToDelete) {
    return res.status(404).json({ message: 'Todo introuvable' })
  }

  const newTodos = todos.filter(todo => todo.id !== req.params.id)
  await writeTodos(newTodos)

  res.status(200).json({ message: 'Todo supprimé' })
}
