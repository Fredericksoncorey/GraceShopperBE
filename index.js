require('dotenv').config();

const { PORT = 3000 } = process.env

const express = require('express');
const server = express();

//const bodyParser = require('body-parser');
const morgan = require('morgan');

const cors = require('cors');
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//server.use(bodyParser.json());

// const apiRouter = require('./api');
// server.use('/api', apiRouter);

const client = require('./db/client');

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
    client.connect(); 
    console.log('the client is connected')
});

