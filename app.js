'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;
const staticDir = '/public';

http.createServer(app).listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});


//Middelware is added here

// static public folder
app.use(express.static(path.join(__dirname, staticDir)));


// Index Route
app.get('/', (req,res) => {
  res.set('content-type', 'text/html');
  res.sendFile('index.html')
})
