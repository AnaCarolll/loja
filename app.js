 import {openDb} from './src/database/configDb.js';

import express from 'express';
const app = express();
app.use(express.json());
console.log("estou vivo 😘");

openDb();


app.get('/', function(req, res){
    res.send("ola usuario, bem vindo ");
});

app.post('/criar', function (req, res){
   console.log(req.body);
    res.json({
        "statuCode": 200
    })
})


app.listen (3000, () => console.log("a vida não é um morango."))