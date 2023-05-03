const express = require('express');
const router = express.Router();

// Rota para verificar se o servidor está funcionando corretamente
router.get('/', (req, res) => {
  res.send('Conexão com o servidor realizada com sucesso!');
});

module.exports = router;
