var express = require('express');
var router = express.Router();

let arrayOfItems = [
    'itemA',
    'itemB',
    'itemC',
    'itemD',
    'itemE'
]

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(arrayOfItems);
});


module.exports = router;
