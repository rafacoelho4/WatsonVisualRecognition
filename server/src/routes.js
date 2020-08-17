const { Router } = require('express');

const ImageController = require('./controllers/ImageController');

const routes = Router();

// Rota para listar
routes.post('/', ImageController.detect);

routes.get('/', (request, response) => {
    return response.status(404).send({ msg: 'Aplicação rodando'});
});

routes.get('/imagem', ImageController.show);

module.exports = routes;