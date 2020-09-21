const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const route=require('./routes/route')
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',async(req,res)=>{
    res.json("hello")

})
app.use('/',route)
// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;