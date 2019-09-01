const  express = require('express');
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// Iniciando o App
const app=express();
mongoose.connect(
    'mongodb://127.0.0.1:27017/nodeapi' , { useNewUrlParser: true });

// Iniciando o Data Base
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });


mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
     {useNewUrlParser: true}
     );

//mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
//var MyModel = mongoose.model('Test', new Schema({ name: String }));

// sem a biblioteca require-dir
//require('./src/models/Product');


// com a biblioteca require-dir
requireDir('./src/models');

const Product = mongoose.model('Product');

const TabelaProd = mongoose.model('Product');

// Criando a Primeira Rota
new TabelaProd ({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  }).save().then(()=> {
    console.log("Produto cadastrado com Sucesso")
  }).catch((err)=>{
    console.log("Erro no cadastro do produto" +err);
  });








// app.get('/', ( req, res) => {
//    Product.create({
//        title: 'React Native',
//        description: 'Build native apps with React',
//        utl: 'http://github.com/facebook/react-native'
//    })                         

                        
    //return res.send('NodeJS Labs...');



app.listen(3001);