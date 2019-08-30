const  express = require('express');
const app=express();

app.get('/', (req,res) => {
    res.send('NodeJS Labs...');
});


app.listen(3001);