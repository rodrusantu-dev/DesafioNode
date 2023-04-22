const express = require('express');
const { PORT } = require('./constants');
const routes = require('./routes');
const app = express();

//ROTA DO TESTE SERVIDOR
const testConnectionRoute = require('./testeServidor');
app.use('/', testConnectionRoute);

app.use(express.json());
app.use('/', routes);



app.listen(PORT, () => {
  console.info(`Servidor rodando na porta ${PORT}`);
});

