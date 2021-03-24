// build and export your unconnected client here

const { Client } = require('pg')

const CONNECTION_STRING = 'postgres://localhost:5432/fitness-dev' || process.env.DATABASE_URL;

const client = new Client(CONNECTION_STRING)

module.exports =  client

