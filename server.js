const  express = require('express');
const mongoose = require("mongoose");
const requireDir = require('require-dir');
//mongodb+srv://NodeJSLabs:<password>@cluster0-fal35.mongodb.net/test?retryWrites=true&w=majority
// Iniciando o App
const app=express();

mongoose.connect(
    "mongodb+srv://NodeJSLabs:NodeJSLabs@cluster0-fal35.mongodb.net/DBLabs?retryWrites=true&w=majority",
     {useNewUrlParser: true}
     );


requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);