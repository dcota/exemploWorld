const express = require('express')
const getCitiesRouter = express.Router()
const connection = require('../dbconnect.js')

//pedido em http://localhost:3000/city
getCitiesRouter.get('/', (req,res) => {
    connection.query('SELECT * FROM city', (err,result) => {
        if(err){
            console.log('Deu m****')
        }
        else {
            res.json(result)
        }
    }) 
})

module.exports = getCitiesRouter