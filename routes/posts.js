// const { request } = require("express");
const express = require("express");
const Comments = require("../schemas/comment");
const Posts = require("../schemas/post");
const router = express.Router();

router.post("/posts", async (req, res) => {
    //게시글 작성
    const { title, content, user, postId, password } = req.body;
    
    const post = await Posts.find({ postId: (postId) });
    
    if (post.length) {
      // 이미 있는경우 에러메세지 추가
      return res
        .status(400)
        .json({ success: false, errorMesssage: "이미 있는 데이터입니다." });
    }

    const createdPosts = await Posts.create({
      title,
      content,
      user,
      postId,
      password,
    });
  
    res.status(201).json({ posts: createdPosts });
  });
  
  router.get("/posts/", async (req, res) => {
    // 게시글 조회
    const { postId } = req.body;
    const [detail] = await Posts.find({ postId: (postId) }); //포스아이디를 넘버를 이용해서 게시글 조회
  
    res.json({
      detail,
    });
  });
  
  router.put("/posts/:postId", async (req, res) => {
    //게시글 수정

    const { user, postId, content, title } = req.body;
    const existspostId = await Posts.find(user);
    if (postId === existspostId[0].postId) {
      await Posts.updateOne(
        { postId },
        { $set: { title, content, user } }
      );
    }
  
    res.status(201).json({ success: true });
  });
  
  router.delete("/posts/:postId", async (req, res) => {
    //게시글 삭제
    
    const { user, postId, content, title } = req.body;
    const existspostId = await Posts.find(user);
    if (postId === existspostId[0].postId) {
      await Posts.delete({ postId });
    }
  
    res.status(200).json({ success: true });
  });
  
  module.exports = router;