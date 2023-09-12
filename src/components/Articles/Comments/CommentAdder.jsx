import React from "react";
import { useState } from "react";

import api from "../../../utils/api-calls"


const CommentAdder = ({articleComments, setArticleComments, articleData}) => {
  const [newComment, setNewComment] = useState("")

  // setArticleComments
  const handleSubmit = (e) => {
    const commentInfo = {
      body: newComment,
      author: 'tickle122'
    }
    e.preventDefault()

    api.postComment(articleData.article_id, commentInfo).then((postedComment) => {
      return setArticleComments([postedComment.data, ...articleComments])
      
    })
    .then(() => {
    })
    .catch(console.log)
  }

  return (
    <section id="commentSection">
      <form className="postComment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Write a comment:</label>
        <br />
        <textarea id="new-comment" name="new-comment" cols="30" rows="3" onChange={(e) => {
            setNewComment(e.target.value)
            }} />
            <br />
        <button>Post Comment!</button>
        <br />
      </form>
    </section>
  );
};

export default CommentAdder;
