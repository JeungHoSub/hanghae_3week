
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    
   
    title: {
        type : String,
         required : true,
         unique : true,
    },
    content : {
        type : String,
         required : true,
         unique : true,

    },
    user : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : Number,
        required : true
    },
    commentId : {
        type : Number,
    },
    

    // post : user, password, content
    // get : data로 포함하여 commentId, user, content, createdAt

});


module.exports = mongoose.model("Comment", commentSchema);