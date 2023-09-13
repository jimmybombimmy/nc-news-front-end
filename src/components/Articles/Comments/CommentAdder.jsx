import React from "react";
import { useState } from "react";

import api from "../../../utils/api-calls"


const CommentAdder = ({articleComments, setArticleComments, articleData, commentNotification, setCommentNotification, scrollToSection, commentNotify}) => {
  const [newComment, setNewComment] = useState("")
  const [commentNotificationColour, setCommentNotificationColour] = useState("black")
  const [commentError, setCommentError] = useState("")
  
  function failedCommentNotify(err, message) {
    setCommentNotification(`ERR${err}: ${message}`)
    setCommentNotificationColour("red")
    scrollToSection(commentNotify)
  }

  // setArticleComments
  const handleSubmit = (e) => {
    const commentInfo = {
      body: newComment,
      author: 'tickle122'
    }
    e.preventDefault()

    

    api.postComment(articleData.article_id, commentInfo).then((postedComment) => {
      setArticleComments([postedComment.data, ...articleComments])
    })
    .then(() => {
      scrollToSection(commentNotify)
      setCommentNotification("Comment Posted!")
      setCommentNotificationColour("black")
      setNewComment("")
    })
    .catch(err => {
      if (err.response.status === 400) {
        setNewComment("")
        failedCommentNotify(err.response.status, err.response.data.message)
      }
    })
  }

  return (
    <section>
    <section id="commentSection">
      <form className="postComment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Write a comment:</label>
        <br />
        <textarea id="new-comment" name="new-comment" cols="30" rows="3" value={newComment} onChange={(e) => {
            setNewComment(e.target.value)

            }} />
            <br />
        <button>Post Comment!</button>
        <br />
      </form>
      
    </section >
    <h3 ref={commentNotify} id="commentNotify" style={{color: commentNotificationColour}}>{commentNotification}</h3>
    </section>
    
  );
};

export default CommentAdder;
