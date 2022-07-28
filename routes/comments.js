// const { request } = require("express");
const express = require("express");
const Comment = require("../schemas/comment");
const Posts = require("../schemas/post");
const router = express.Router();


  router.post("/comments", async (req, res) => { //댓글작성
    const { title, content, user, commentId, password } = req.body;
  
    const createdComments = await Comment.create({
        title,
      content,
      user,
      commentId,
      password,
    })
    res.status(201).json({
        Posts: createdComments,
        result: "success",
        msg: "댓글이 등록되었습니다.",
      });
  });
  
  router.get("/comment", async (req, res) => { //댓글 조회
    const { commentId } = req.body;
    const [detail] = await Posts.find({ commentId: (commentId) }); //포스아이디를 넘버를 이용해서 게시글 조회
  
    res.json({
      detail,
    });
  });
  
  router.put("/comment/:commentId", async (req, res) => { // 댓글수정
      

      const { user, commentId, content, title, password } = req.body;
      const existsComment = await Comment.findById(commentId)
      if(existsComment.user === user){
        await existsComment.updateOne({ commentContent }, { $set: { commentContent } })
      }
    }
  );
  
  router.delete("comment/:commetId", async (req, res) => { //댓글삭제
      const { commentId } = req.body;
      const existsComment = await Comment.findById(commentId);
  
      if (existsComment) {
        await Comment.findByIdAndDelete(commentId);
        res.status(200).json({
          result: "success",
          msg: "댓글 삭제완료",
        });
      }
    }
  );

  module.exports = router;