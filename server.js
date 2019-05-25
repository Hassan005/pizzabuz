//Install express server
const express = require('express');
const path = require('path');
var app = require("./backend/app");


// Serve only the static files form the dist directory
const http = require("http");
const server=http.createServer(app)


// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080);