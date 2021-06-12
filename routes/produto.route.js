const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send("Produto");
});

router.get('/:id', (req, res, next) => {
    res.status(200).send("Produto 1");
});

router.post('/', async function (req, res, next) {
	res.status(200).send("Produto posts");
});

router.put('/:id', async function (req, res, next) {
	res.status(200).send("Produto put");
});

router.delete('/:id', async function (req, res, next) {
	res.status(200).send("Produto delete");
});

module.exports = router;
