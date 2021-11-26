const https = require('https')
const express = require('express')
const fs = require('fs')

//importing the key and the certificate
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')

//creating the express app instance
const app = express()

//create the https server using https module and pass the express app instance
const server = https.createServer({key: key, cert: cert }, app)

//basic route for testing
app.get('/', (req, res) => {
     res.send('This is a secure server') 
})

server.listen(3001, () => console.log(`Server listening on port 3001`))