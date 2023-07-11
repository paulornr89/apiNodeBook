const express = require('express');
const app = express();

/**ROTA */
app.get('/', (req, res) => {
    res.send('Serviço ativo');
})

/**PORTA */
app.listen('3000');

