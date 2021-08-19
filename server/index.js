const express=require("express");
const app=express();


//몽고디비 설정 불러오기
const config =require('./config/key')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors=require("cors");


//디비 연결
const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
    })
    .then(()=>console.log('디비연결 성공'))
    .catch((err)=>console.log(err));



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

