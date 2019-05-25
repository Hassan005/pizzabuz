//var express=require('express');
const debug = require("debug")("node-angular");

var app = require("./backend/app");
port=3000

app.set("port",port)

const http = require("http");
const server=http.createServer(app)
server.listen(port)