const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postSchema=mongoose.Schema({
    writer:{
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true,
        maxlength:40,
        minlength:5
    },
    contents:{
        type:String,
        required:true,
        minlength:10
    },
    write_time:{
        type: Date
    }
})

const Post=mongoose.model('Post',postSchema);
module.exports={Post}