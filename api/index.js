const express = require('express')
const router = require('./routes/routes')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(router);
const Porta = 3000;
app.listen(Porta, () => {
    console.log(`Servidor na porta ${Porta}`);
})