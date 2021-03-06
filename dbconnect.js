const mysql = require('mysql2')
require('dotenv').config({ path: './private/.env' })

const connection = mysql.createConnection({
    host: process.env._HOST,
    user:process.env._USERNAME,
    password:process.env._PASSWORD,
    database:process.env._DATABASE,
    port: process.env._PORT
})

connection.connect((err) =>{
    if(err){
        console.log(err)
        throw err
    }       
    else {
        console.log('Connected to database ' + process.env._DATABASE)
    }
})

module.exports = connection