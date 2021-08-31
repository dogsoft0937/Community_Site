const express=require('express');
const router=express.Router();

const {Post}=require('../models/Post');

router.post('/',(req,res)=>{
    const post=new Post(req.body);
    post.save((err)=>{
        if(err){
            return res.json({success:false,msg:"글 작성 실패"})
        }else{
            return res.json({success:true,msg:"글 작성 성공"})
        }
    })
})

router.get('/posts',(req,res)=>{
    let findArgs={};
    Post.find(findArgs)
    .populate('writer')
    .skip(10)
    .limit(7)
    .exec((err,userInfo)=>{
        if(err){
            return res.json({success:false})
        }else{
            return res.json({success:true,userInfo})
        }
    })
})
module.exports = router;