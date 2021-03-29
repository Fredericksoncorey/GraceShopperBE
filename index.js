require('dotenv').config();

const { PORT = 3000 } = process.env

const express = require('express');
const server = express();
const morgan = require('morgan');

const cors = require('cors');


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//const bodyParser = require('body-parser');


server.use(cors());
server.use(morgan("dev"));
//server.use(bodyParser.json());

const apiRouter = require('./api');
server.use('/api', apiRouter);

server.use((error, req, res, next) => {
    console.log("Something is broken:", error);
    res.send(error);
    
  });

const client = require('./db/client');

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
    client.connect(); 
    console.log('the client is connected')
});

