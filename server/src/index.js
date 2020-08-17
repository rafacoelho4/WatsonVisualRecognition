const express = require('express');
const ImageController = require('./controllers/ImageController');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=>{console.log('Rodando')});

// app.get('/', (request, response) => {

//     return response.status(404).send({ msg: 'Aplicação rodando'});
// });

// app.post('/', ImageController.detect);