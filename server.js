const  express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');
//mongodb+srv://NodeJSLabs:<password>@cluster0-fal35.mongodb.net/test?retryWrites=true&w=majority
// Iniciando o App
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://NodeJSLabs:NodeJSLabs@cluster0-fal35.mongodb.net/DBLabs?retryWrites=true&w=majority",
     {useNewUrlParser: true}
     );


requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);