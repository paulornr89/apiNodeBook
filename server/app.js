const express = require('express');
const app = express();

/**ROTA */
app.get('/', (req, res) => {
    res.send('Serviço ativo');
})

// app.use((req, res, next) => {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// })
app.use((req, res, next) => {
    if(req.url === '/favicon.ico'){
        res.writeHead(200, {'Content-Type': 'image/x-icon'})
        res.end('');
    }else{
        next()
    }
})

app.use((err, req, res, next) => {
    if(err.status !== 404){
        console.log(err.stack);
        res.status(err.status || 500).json({err:err.message});
    }    
})

/**PORTA */
app.listen('3000');


