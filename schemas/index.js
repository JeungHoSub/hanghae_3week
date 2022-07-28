const mongoose = require("mongoose");

const connect = () => {
   
    mongoose.connect("mongodb://127.0.0.1:27017/hanghae_blog", { ignoreUndefined : true })
    .catch((err) => {
        console.error(err);
    });
};

module.exports = connect;

