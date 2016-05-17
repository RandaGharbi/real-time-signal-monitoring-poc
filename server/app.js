var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var restify = require('restify');
var bpmn=require('bpmn');

var client = restify.createJsonClient({url: "http://localhost:8080"});



// var app = express();
//
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
//
// app.use(express.static(path.join(__dirname, '..', '/public')));
// app.use(express.static(path.join(__dirname, '..', '/assets')));
//
//
// app.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname, '..', 'public/app/index.html'));
// });
//
//
module.exports = client;
