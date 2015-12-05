var express = require('express');
var router = express.Router();
var quotes = require("../quotesDB");


router.get('/', function(req, res) {
    res.json(quotes);
});

module.exports = router;
