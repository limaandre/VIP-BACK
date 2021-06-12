
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cliente', require('./routes/cliente.route'));
app.use('/produto', require('./routes/produto.route'));

app.listen(3333);