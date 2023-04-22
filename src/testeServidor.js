const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Conexão com o servidor realizada com sucesso!3');
});

module.exports = router;
