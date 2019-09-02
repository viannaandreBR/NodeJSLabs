# NodeJSLabs                              29/09/2019
-----------------------------------------------------------------------------------------
yarn init -y
-----------------------------------------------------------------------------------------
npm install express --save

-----------------------------------------------------------------------------------------
NodeMon
      https://nodemon.io/
     // yarn add nodemon -D
     npm install --save-dev nodemon
      "scripts": {
            "dev":"nodemon server.js"
       }
      npm run dev
-----------------------------------------------------------------------------------------
Docker
https://docs.docker.com/install/linux/docker-ce/ubuntu/

sudo docker run --name mongodb -p 27017:27017 -d  mongo
---> e901f3e1812ac55c9da0425182208d1cf2a2bf4a9e6badb7a7c85de9e161a809

sudo docker ps

localhost: 27017
---> It looks like you are trying to access MongoDB over HTTP on the native driver port.

Download robo3T
https://robomongo.org/

---
Re-Iniciar o Docker

docker ps -a
docker start mongodb

npm install mongoose --save
https://mongoosejs.com/


Saber IP Address MongoDB

sudo docker inspect e901f3e1812a | grep "IPAddress"

-----------------------------------------------------------------------------------------
Biblioteca NodeJS  Require-dir

trabalha com multiplos models, simultaneamente

npm install require-dir --save

-----------------------------------------------------------------------------------------
Configuração MongoDB Atlas
Project: NodeJS Labs

mongodb+srv://NodeJSLabs:<password>@cluster0-fal35.mongodb.net/test?retryWrites=true&w=majority

--------------------------------------------------------------------------------------------
Armazenando Produto no Mongo DB

new Product({
    title: 'Visual Basic 6',
    description: 'Build Front End Apps with ReactJS',
    url: 'http://github.com/facebook/reactJS'
  }).save().then(()=> {
    console.log("Produto cadastrado com Sucesso")
  }).catch((err)=>{
    console.log("Erro no cadastro do produto" +err);
  });

------------------------------------------------------------------------------------------------------
Insomnia

Manage Environment:
{
  "base_url": "http://localhost:3001/api"
}


1) Get
http://localhost:3001/api/products

/CRUD/Insomnia_2019-09-01.json

---------------------------------------------------------------------------------------------------
Módulo Mongoose para paginação de visualização

npm install --save mongoose-paginate

{{ base_url  }}/products?page=3
