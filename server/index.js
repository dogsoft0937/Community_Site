const express=require("express");
const app=express();

const cors=require("cors");


//API 차단 문제 해결
app.use(cors());


const port = process.env.PORT || 5000



app.get("/",(req,res)=>{
    res.send("test");
})


app.listen(port,()=>{
    console.log("Server start");
})

