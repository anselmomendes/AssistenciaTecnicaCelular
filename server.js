const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

require("dotenv").config();

//iniciando o app express
const app = express();
app.use(express.json());
app.use(cors());

//conectar ao banco de dados
mongoose.connect(
    'mongodb:mongodb+srv://deploy:5S#525#463rZSjbj@mongoassistenciatecnica-h2nhv.mongodb.net/test?retryWrites=true&w=majority/celular',
    { useNewUrlParser: true, useUnifiedTopology: true });

//conectar a todos os models
requireDir('./src/models');

//Rotas
app.use('/', require('./src/routers'));

//Escutar porta
app.listen(process.env.PORT || 8089);
