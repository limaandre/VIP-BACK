const express = require('express');
const router = express.Router();
const db = require("../database/database.js");

router.get('/', (req, res, next) => {
    var sql = "select * from cliente";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "status": false, "msg": err.message });
            return;
        }
        res.json({
            "status": true,
            "data": rows
        });
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).send("Cliente 1");
});

router.post('/', async function (req, res, next) {
    res.status(200).send("Cliente posts");
});

router.put('/:id', async function (req, res, next) {
    res.status(200).send("Cliente put");
});

router.delete('/:id', async function (req, res, next) {
    res.status(200).send("Cliente delete");
});

module.exports = router;
