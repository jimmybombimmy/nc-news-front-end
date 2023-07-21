import React from "react";
import api from "../../utils/api-calls";
import dateConverter from "../../utils/utils";
import CommentView from "./CommentView";
import Vote from "./Vote";
import CommentAdder from "./CommentAdder";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [isArticleLoading, setIsArticleLoading] = useState(true);

  const [articleComments, setArticleComments] = useState([]);
  const [articleCommentsLoading, setArticleCommentsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsArticleLoading(true);
    setArticleCommentsLoading(true);
    api
      .getArticleById(article_id)
      .then((response) => {
        return setArticleData(response);
      })
      .then(() => {
        setIsArticleLoading(false);
      })
      .then(() => {
        return api.getArticleComments(article_id);
      })
      .then((response) => {
        setArticleComments(response.comments);
      })
      .then(() => {
        setArticleCommentsLoading(false);
      });
  }, []);

  return (
    <section>
      {isArticleLoading === true ? (
        <h2>Loading Article...</h2>
      ) : (
        <section id="articlePage">
          <section id="articleTopHalf">
            <section className="articleTitleBox">
              <Vote articleData={articleData} />
              <h1 className="articleTitle">{articleData.title}</h1>
            </section>
            <section className="articleInfoBox">
              <p className="articleInfo">author: {articleData.author}</p>
              <p className="articleInfo">topic: {articleData.topic}</p>
              <p className="articleInfo">
                created: {dateConverter(articleData.created_at)}
              </p>
            </section>
          </section>
          <section className="articleBody">
            <img
              className="articleImage"
              src={articleData.article_img_url}
              alt="User Uploaded Article Image"
            />
            <p className="articleBody">{articleData.body}</p>
          </section>
          <section className="bodyCommentSeparation"></section>
            <CommentAdder setArticleComments={setArticleComments} articleData={articleData}/>
          <section id="commentsViewSection">
            {articleCommentsLoading === true ? (
              <h2>Loading Comments...</h2>
            ) : articleComments.length === 0 ? (
              <h3>No comments to display</h3>
            ) : (
              articleComments.map((comment) => {
                return (
                  <CommentView comment={comment} key={comment.comment_id} />
                );
              })
            )}
          </section>
        </section>
      )}
    </section>
  );
};

export default Article;
