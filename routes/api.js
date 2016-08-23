var express = require('express');
var request = require('request');

var router = express.Router();
var credentials = (require ('fs').existsSync (__dirname + '/../credentials.js') ?
    require (__dirname + '/../credentials')
    : (console.log ('No credentials.js file present, assuming using CONSUMERKEY & CONSUMERSECRET system variables.'), require (__dirname + '/../credentials_'))) ;
var myToken = {};

router.get ('/token', function (req, res) {
    request.post (
        credentials.Authentication,
        { form: credentials.credentials },
        function (error, response, body) {
            if ( !error && response.statusCode == 200 )
                myToken = body;
                console.log('mytoken ', myToken);
                res.send (body) ;
        }) ;
}) ;

module.exports = router;