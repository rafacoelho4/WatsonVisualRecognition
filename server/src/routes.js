const { Router } = require('express');

const ImageController = require('./controllers/ImageController');

const routes = Router();

// Rota para listar
routes.post('/', ImageController.detect);

module.exports = routes;