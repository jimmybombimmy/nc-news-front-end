import React from "react";
import dateConverter from "../../../utils/utils";

const CommentView = ({ comment }) => {
  return (
    <section className="eachComment">
      <section>
      <p className="preComment"><b>{comment.author}</b> - </p>
      <p className="preComment">Created: {dateConverter(comment.created_at)}</p>
      </section>
      <p className="commentBody">{comment.body}</p>
      <section >
        <p className="preComment">Votes: {comment.votes}</p>
      </section>
    </section>
  );
};

export default CommentView;
