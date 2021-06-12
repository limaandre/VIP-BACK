const express = require('express');
const router = express.Router();
const db = require('../database/database.js');

const paramsRequired = ['nome', 'fabricacao', 'codigoProduto', 'tamanho', 'valor'];

const validateParams = (params, paramsRequired) => {
    const paramsWithErro = paramsRequired.filter( (param) => {
        return ( param && !params.hasOwnProperty(param)) || !params[param] ;
    });
    if (paramsWithErro.length) {
        const msg = `Os parâmetros ${paramsWithErro.join(', ')} são obrigatórios`;
        return { 'status': false, msg};
    }
    return { 'status': true};
}

router.get('/', (req, res) => {
    const sql = 'select * from produto';
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ 'status': false, 'msg': err.message }).end();
            return;
        }
        res.json({
            'status': true,
            'data': rows
        }).end();
    });
});

router.get('/:id', (req, res, next) => {
    const sql = 'select * from produto where id = ?';
    const params = [req.params.id];
    db.get(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ 'status': false, 'msg': err.message }).end();
            return;
        }
        res.json({
            'status': true,
            'data': result ? result : {}
        }).end();
    });
});

router.post('/', async function (req, res, next) {    
    const dataParams = req.body;
    const isValid = validateParams(dataParams, paramsRequired);
    if (!isValid.status) {
        res.status(400).json({ 'status': false, 'msg': isValid.msg }).end();
        return;
    }

    const { nome, fabricacao, codigoProduto, tamanho, valor } = dataParams;
    const sql = `insert into produto (codigoProduto, nome, fabricacao, tamanho, valor) 
            VALUES 
            (?, ?, ?, ?, ?);`;
    const params = [codigoProduto, nome, fabricacao, tamanho, valor];
   
    db.run(sql, params, (err) => {
        if (err) {
            res.status(400).json({ 'status': false, 'msg': err.message }).end();
            return;
        }
        res.status(201).json({
            'status': true,
            'data': dataParams
        });
    });
});

router.put('/:id', async function (req, res, next) {
    const idParam = [req.params.id];
    const dataParams = req.body;
    const isValid = validateParams(dataParams, paramsRequired);
    if (!isValid.status) {
        res.status(400).json({ 'status': false, 'msg': isValid.msg }).end();
        return;
    }

    const { nome, fabricacao, codigoProduto, tamanho, valor } = dataParams;
    const sql = `update produto set codigoProduto = ?, nome = ?, fabricacao = ?, tamanho = ?, valor = ? where id = ?;`;
    const params = [codigoProduto, nome, fabricacao, tamanho, valor, idParam];
   
    db.run(sql, params, (err) => {
        if (err) {
            res.status(400).json({ 'status': false, 'msg': err.message }).end();
            return;
        }
        res.status(200).json({
            'status': true
        });
    });
});

router.delete('/:id', async function (req, res, next) {
    const sql = 'delete from produto where id = ?';
    const params = [req.params.id];
    db.run(sql, params, (err) => {
        if (err) {
            res.status(400).json({ 'status': false, 'msg': err.message }).end();
            return;
        }
        res.status(200).json({
            'status': true
        });
    });
});

module.exports = router;
