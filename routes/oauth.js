var express = require('express');
var urlParse = require('url');
var ForgeOauth2 = require('forge-oauth2');
var request = require('request');
var _ = require('underscore');

var routerForge = express.Router();
var credentials = (require ('fs').existsSync (__dirname + '/../credentials.js') ?
	require (__dirname + '/../credentials')
	: (console.log ('No credentials.js file present, assuming using CONSUMERKEY & CONSUMERSECRET system variables.'), require (__dirname + '/../credentials_'))) ;


var authorizationCode;
var opts;
var sta;
var url;
var urlParts;
var apiInstance;
var authCodeStr;

//  Version that does a plain get/post with form encoding
routerForge.post('/login-forge', function (req, res) {
	console.log('credentials client ', credentials)
	var opts = {
	'scope': encodeURIComponent("data:read"),
	'client_id': credentials.credentials.client_id,
	'response_type': 'code',
	'redirect_uri': encodeURIComponent(credentials.credentials.callbackUrl)
	};
	console.log('testing console');
	sta = _.map(opts, function (val, key) {
	return (key + '=' + val);
	})
	url = 'https://developer-stg.api.autodesk.com/authentication/v1/authorize?' + sta.join('&');
	console.log('the url ',url);
	res.redirect(url);	

});

// Use Cyrille's NPM
routerForge.get('/oauth', function (req, res) {
	console.log('we are here');
	urlParts = urlParse.parse(req.url);
	authorizationCode = urlParts.query.split('=')[1];
	console.log("GET authorize called back with code: ", authorizationCode);
	apiInstance = new ForgeOauth2.ThreeLeggedApi();
	console.log('api apiInstance', apiInstance);
	authCodeStr = 'authorization_code';

	var callback = function(error, data, response) {
	  if (error) {
	    console.error(error);
	  } else {
	    console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 4));
	  }
	  res.status (200).end ();
	};
	  apiInstance.gettoken(
	  	credentials.credentials.client_id, 
	  	credentials.credentials.client_secret,
	    authCodeStr, 
	    authorizationCode, 
	    credentials.credentials.callbackUrl,callback
	  );
	  
});


module.exports = routerForge;
