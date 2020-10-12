const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');

routes
  // Users
  .get('/api/users', userController.index)
  .post('/api/users', userController.create)
  .put('/api/users/:id', userController.update)
  .delete('/api/users/:id', userController.delete)
  // Projects
  .get('/api/projects', projectController.index)
  .post('/api/projects', projectController.create);

module.exports = routes;