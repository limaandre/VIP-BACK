const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send("Cliente");
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
