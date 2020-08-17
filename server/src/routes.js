const { Router } = require('express');

const ImageController = require('./VisualRecog');

const routes = Router();

// Rota para listar
routes.get('/', ImageController.detect);

module.exports = routes;