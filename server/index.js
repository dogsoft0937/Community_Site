const express=require("express");
const app=express();


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors=require("cors");





//API 차단 문제 해결
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users',require('./routes/users'));

const port = process.env.PORT || 5000



app.get("/",(req,res)=>{
    res.send("test");
})


app.listen(port,()=>{
    console.log("Server start");
})

