const  express = require('express');
const mongoose = require("mongoose");

// Iniciando o App
const app=express();

// Iniciando o Data Base
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

//mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
//var MyModel = mongoose.model('Test', new Schema({ name: String }));

// Criando a Primeira Rota
app.get('/', (req,res) => {
    res.send('NodeJS Labs...');
});


app.listen(3001);