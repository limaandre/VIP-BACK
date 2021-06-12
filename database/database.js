const sqlite3 = require('sqlite3');
const fs = require('fs');
const clienteSchema = fs.readFileSync('database/cliente-schema.sql').toString();
const produtoSchema = fs.readFileSync('database/produto-schema.sql').toString();

const trataErro = (erro, table) => {
    if (erro) {
        console.log(erro);
        return;
    }
    console.log(`Table ${table} created.`);
}

const db = new sqlite3.Database('database/vipDB', (erro) => {
    if (erro) {
        console.error(erro.message);
    } else {
        console.log('Connected SQLite');
        db.run(
            clienteSchema,
            (err) => {
                trataErro(err, 'Cliente');
            }
        );
        db.run(
            produtoSchema,
            (err) => {
                trataErro(err, 'Produto');
            }
        );
    }
});
module.exports = db;
