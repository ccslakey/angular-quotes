var express = require('express');
var router = express.Router();
var quotes = require("../quotesDB");


router.get('/', function(req, res) {
    res.render('quotes',{
    	quotes: quotes
    })
});

module.exports = router;
