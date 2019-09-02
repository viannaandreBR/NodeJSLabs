const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota Listagem
routes.get("/products", ProductController.index);

// Rota Show
routes.get("/products/:id",ProductController.show);

// Rota Criar Postagem
routes.post('/products', ProductController.store);

// Rota Update
routes.put('/products/:id', ProductController.update);


// Rota Delete
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;