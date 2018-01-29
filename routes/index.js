var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
    console.log("123");
    res.render('test');
});

router.get('/testGet', function(req, res, next) {
    console.log("123123Get");
    res.send('123test');
});

router.post('/testPost', function(req, res, next) {
    console.log("123123Post");
    console.log(req.body.test);
    res.send('123test');
});

module.exports = router;
