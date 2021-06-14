
const cors = require('cors');
const express = require('express');
const app = express();
const options = { methods: "GET, OPTIONS, PUT, POST, DELETE", origin: "*"};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cliente', require('./routes/cliente.route'));
app.use('/produto', require('./routes/produto.route'));

app.listen(3333);