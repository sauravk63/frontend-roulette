const express = require('express')
const app = express()

app.get('/home', (req, resp)=>{
    resp.send("Welcome to homepage!")
})

app.listen(9000, '0.0.0.0', ()=>{
    console.log('Server is running on port 9000')
})