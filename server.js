const  express = require('express');
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// Iniciando o App
const app=express();

// Iniciando o Data Base
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
//var MyModel = mongoose.model('Test', new Schema({ name: String }));

// sem a biblioteca require-dir
require('./src/models/Product');


// com a biblioteca require-dir
requireDir('./src/models');

const Product = mongoose.model("Product");



// Criando a Primeira Rota
app.get('/', ( req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        utl: 'http://github.com/facebook/react-native'
    });                         

    Product.create({
        title: 'React JS',
        description: 'Build FrontEnd Apps  with React',
        utl: 'http://github.com/facebook/reactjs'
    });                         
    return res.send('NodeJS Labs...');
});



app.listen(3001);