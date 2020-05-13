const express = require('express');
const routes = express.Router();
// importa o ProductController
const ProductController = require('./controllers/ProductController');

// chama o método index de ProductController
routes.get('/products', ProductController.index);
// para mostrar detalhes de um único produto. A rota no node pode ser feita com :id
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


// para utilizar em server.js
module.exports = routes;
