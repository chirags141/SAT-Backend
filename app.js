const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

//Load config
dotenv.config({path:"./config.env"})


const app = express();

app.get('/',function(req,res){
    res.send("Hello SAT Backend Team")
})

app.get('/firebase',(req,res)=>{
    res.send("Hi Firebase")
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})