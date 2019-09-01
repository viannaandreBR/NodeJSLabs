const mongoose = require('mongoose')

// Mongoose Setup

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost/acessdb' , { useNewUrlParser: true }).then(()=>{
  console.log('Mongo DB conectado');
}).catch((err)=>{
  console.log('Houve Um erro ao se conectar ao mongo DB:' +err);
})


// Mode - usuarios
// Definindo o Model

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,  
  },
  sobrenome:{
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
  },
  idade:{
    type: Number,
    require:true,
  },
  pais:{
    type: String,
  }

});

mongoose.model('Users', UserSchema);

const registro = mongoose.model('Users');

// Falando a Collection

new registro ({
  nome:"Andre",
  sobrenome:"Vianna",
  email:"andre@bioinformaticalabs.com",
  idade: 45,
  pais: "Brasil"
}).save().then(()=> {
  console.log("Usuario Criado com Sucesso")
}).catch((err)=>{
  console.log("Erro na criação do usuario..." +err);
});
