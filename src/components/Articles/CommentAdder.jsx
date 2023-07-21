import React from "react";
import { useState } from "react";

import api from "../../utils/api-calls"


const CommentAdder = ({setArticleComments, articleData}) => {
  const [newComment, setNewComment] = useState("")

  setArticleComments
  console.log("articool", articleData)

  const handleSubmit = (e) => {
    const commentInfo = {
      body: newComment,
      author: 'lurker'
    }
    e.preventDefault()
    console.log("eeeeee", e.target.value, e)
    api.postComment(articleData.article_id, commentInfo).then((postedComment) => {
      console.log("pppp,", postedComment)
    })
  }

  return (
    <section id="commentSection">
      <form className="postComment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Write a comment:</label>
        <textarea id="new-comment" name="new-comment" cols="30" rows="5" onChange={(e) => {
            setNewComment(e.target.value)
            console.log(newComment)
            }} />
        <button>Post Comment!</button>
      </form>
    </section>
  );
};

export default CommentAdder;
