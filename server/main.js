__path = process.cwd()

var { performance } = require('perf_hooks');
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

module.exports = router
