const express = require('express');
const CurrencyService = require('../services/CurrencyService');

const router = express.Router();

router.get('/currencies', async (req, res) => {

    res.send(await CurrencyService.getAllCurrencies());
});

router.get('/currencies/:currency', async (req, res) => {
    res.send(await CurrencyService.getCurrencyRate(req.params));
});

module.exports = router;