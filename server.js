const  express = require('express');
const mongoose = require("mongoose");
const requireDir = require('require-dir');
//mongodb+srv://NodeJSLabs:<password>@cluster0-fal35.mongodb.net/test?retryWrites=true&w=majority
// Iniciando o App
const app=express();
//mongoose.connect(
 //   'mongodb://127.0.0.1:27017/nodeapi' , { useNewUrlParser: true });

// Iniciando o Data Base
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });


mongoose.connect(
    "mongodb+srv://NodeJSLabs:NodeJSLabs@cluster0-fal35.mongodb.net/DBLabs?retryWrites=true&w=majority",
     {useNewUrlParser: true}
     );

//mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
//var MyModel = mongoose.model('Test', new Schema({ name: String }));

// sem a biblioteca require-dir
//require('./src/models/Product');


// com a biblioteca require-dir
requireDir('./src/models');

const Product = mongoose.model('Product');

//const TabelaProd = mongoose.model('Product');

// Criando a Primeira Rota - ok
new Product({
    title: 'Visual Basic 6',
    description: 'Build Front End Apps with ReactJS',
    url: 'http://github.com/facebook/reactJS'
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