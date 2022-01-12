const express = require('express')
const path = require('path')
const app = express()


//definir as rotas
app.use('/city',require('./routes/getCitiesRoute'))

//definir a pasta pública
app.use(express.static('./public'))

//pedido em http://localhost:3000
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

const port = 3000
 
app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})