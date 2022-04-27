const mongoose = require('mongoose')
const { dbUsername, dbPassword, dbHost, dbName } = require('.')

const connection = async () => {
     const conn = await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`)
     console.log('Mongo DD connected: ', conn.connection.host);
}

module.exports = {connection, mongoose}