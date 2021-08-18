const express=require('express');
const router=express.Router();

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.status(200).json({success:true})
})

module.exports = router;