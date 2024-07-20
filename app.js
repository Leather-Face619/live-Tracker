const express = require("express")
const app = express()

app.get('/',function (req,res) {
    res.send("Helladsadado")
    
})
app.listen(3000)