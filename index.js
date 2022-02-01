var http = require('http')
var express = require('express')

var port = process.env.PORT || 3000

var app = express();

app.get('/', (req,res)=>{
    res.sendFile('index.html',{root:__dirname})
})

app.listen(port,(req,res)=>{
    console.log("server started ");
})