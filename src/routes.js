const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.get('/api/users', userController.index);
routes.post('/api/users', userController.create);
routes.put('/api/users/:id', userController.update);
routes.delete('/api/users/:id', userController.delete);

module.exports = routes;