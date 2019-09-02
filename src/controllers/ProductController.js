const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// CRUD
module.exports = {
  // Listagem
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },
// Detalhe

async show( req, res) {
  const product = await Product.findById(req.params.id);

  return res.json(product);
},


  // Criação
    async store(req,  res) {
      const product = await Product.create(req.body);

      return res.json(product);

    }

};