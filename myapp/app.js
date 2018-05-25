const express = require('express')
const app = express()

app.get('/', (req, res) => {res.sendFile(__dirname + "/index.html")})
app.get('/name/:name', (req, res) => {res.send({"name":req.params.name})})
app.get('/admin', (req, res) => res.send('Welcome to the admin page'))
app.get('/captain',(req,res) => res.send('Hi Abhishek, Captain America welcomes you!!'))

app.listen(3000,'192.168.2.99', () => console.log('Example app listening on port 3000!'))
