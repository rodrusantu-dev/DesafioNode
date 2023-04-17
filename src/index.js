const express = require('express');
const app = express();
const uuid = require('uuid');
const { PORT, TESTE_CONEXAO } = require('./constants');
const routes = require('./routes');
const transactions = [];

app.use(express.json());

// Adiciona as rotas ao aplicativo
app.use('/', routes);

// Criação do servidor
app.listen(PORT, () => {
    console.info(`Servidor rodando na porta ${PORT}`);
});

