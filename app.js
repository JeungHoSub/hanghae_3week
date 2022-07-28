const express = require("express");
const connect = require("./schemas");
const app = express();
const port = 3000;
// const post = require("./routes/posts");
// const comment = require("./routes/comments");


connect();
const postsRouter = require("./routes/posts")
const CommentsRouter = require("./routes/comments")


const requestMiddelware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
};
//라우터가 필요하다.

app.use(express.json());
app.use(requestMiddelware);
app.use("/api", [postsRouter, CommentsRouter]);
// app.use("/posts", post);
// app.use("/comments", comment);


app.get("/", (req, res) => {
    res.send("Hello world")
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!");
});