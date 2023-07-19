import React from "react";
import { Routes, Route } from "react-router-dom";
import Article from "../../Articles/Article";

const ArticlePreview = ({article}) => {
  const date = new Date(article.created_at)
  const dateShort = date.toString().slice(4,15)

  return (
    <section className="articlePreview">
      <hr className="hr"></hr>
      <a className="articlePreviewTitle" href={`/articles/${article.article_id}`} onClick={() => {goToArticleId(article.article_id)}}>{article.title}</a>
      <br />
      <p className="articlePreviewInfo">Author: {article.author}</p>
      <p className="articlePreviewInfo">Topic: {article.topic}</p>
      <p className="articlePreviewInfo">Comments: {article.comment_count}</p>
      <p className="articlePreviewInfo">Votes: {article.votes}</p>
      <p className="articlePreviewInfo">Created: {dateShort}</p>
      <p></p>
    </section>
  );
};

export default ArticlePreview;
