//var express=require('express');
const debug = require("debug")("node-angular");
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/'));
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/pizzabuz/index.html'));
});
var app = require("./backend/app");
port=3000

app.set("port",port)

const http = require("http");
const server=http.createServer(app)
server.listen(port)