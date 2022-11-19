const mongoose = require('mongoose');

const {Schema}=mongoose

const userSchema = new Schema({
    company:{
        type:String,
        required:true
    },
    trainername:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    photourl:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
   
    
    date:{
        type:Date,
        // default:Date.now,
    }
    
    
});
module.exports = mongoose.model("users",userSchema);