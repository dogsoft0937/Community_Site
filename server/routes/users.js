const express=require('express');
const router=express.Router();

const { User } = require("../models/User"); //모델 불러오기
const {auth}=require('../middleware/auth');
router.post('/register',(req,res)=>{
    console.log(req.body)
    const user=new User(req.body);
    user.save((err,doc)=>{
        if(err){
            console.log(err)
            return res.json({success:false,err})
        }else{
            console.log("success:true");
            return res.json({success:true})
        }
    })
})
router.post('/login',(req,res)=>{
    User.findOne({id:req.body.id},(err,user)=>{
        if(!user){
            return res.json({loginSuccess:false,msg:"없는 아이디"})
        }else{
            user.checkPassword(req.body.password,(err,isMatch)=>{
                if(!isMatch){
                    return res.json({loginSuccess:false,msg:"비밀번호 오류"})
                }else{
                    user.createToken((err,user)=>{
                        if(err){
                            return res.send(err)
                        }else{
                            console.log("로그인 성공");
                            res.cookie('auth',user.token).json({loginSuccess:true,user_id:user._id})
                        }
                    })
                }
            })
        }
    })
})
router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: ""}, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});
module.exports = router;