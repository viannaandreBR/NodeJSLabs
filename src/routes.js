const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Listagem
routes.get("/products", ProductController.index);

// Show
routes.get("/products/:id",ProductController.show);

// Criar Postagem
routes.post('/products', ProductController.store);



module.exports = routes;