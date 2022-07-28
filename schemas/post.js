
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
 
     title: {
        type : String,
         
         
    },
    content : {
        type : String,
         
         

    },
    user : {
        type : String,
        
        
    },
    
    postId : {
        type : Number,
    },
    password : {
        type : Number,
        
    }
    
    
    
    // post : user, password, title, content
    // get : data에 포함하는 postId, user, title, createAt(timestamp), 
});


module.exports = mongoose.model("Post", postSchema);