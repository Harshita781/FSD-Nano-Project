var http = require('http');  
const express = require ('express')
const app= express()        // for new application 

const path = require ('path')

app.use('/static' , express.static('public'))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"))
   

})



app.listen(3050);    
