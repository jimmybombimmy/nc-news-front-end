import React from "react";
import { useState, useEffect } from "react";

import api from "../../../utils/api-calls";
import CommentView from "./CommentView";


const CommentSection = ({articleComments, articleCommentsLoading}) => {
  

  return (
    <section id="commentsViewSection">
      {articleCommentsLoading !== false ? (
        <h2>Loading Comments...</h2>
      ) : articleComments.length === 0 ? (
        <h3>No comments to display</h3>
      ) : (
        articleComments.map((comment) => {
          return <CommentView comment={comment} key={comment.comment_id} />;
        })
      )}
    </section>
  );
};

export default CommentSection;
