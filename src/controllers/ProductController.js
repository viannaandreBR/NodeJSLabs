const mongoose = require('mongoose');

const Product = mongoose.model('Product');

// Métodos CRUD's
module.exports = {
  // Método Listagem
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },
// Método Detalhe

async show( req, res) {
  const product = await Product.findById(req.params.id);

  return res.json(product);
},

// Método Update
async update(req, res) {
const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})

return res.json(product);
},

// Método Delete
async destroy(req, res) {
  await Product.findByIdAndRemove(req.params.id);

  return res.send();

},

  // Método Criação
    async store(req,  res) {
      const product = await Product.create(req.body);

      return res.json(product);

    }

};