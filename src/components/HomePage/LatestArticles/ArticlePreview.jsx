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
      <p className="articlePreviewInfo"><strong>Author:</strong> {article.author} </p>
      {" "}
      <p className="articlePreviewInfo"><strong>Topic:</strong> {article.topic} </p>
      {" "}
      <p className="articlePreviewInfo"><strong>Comments:</strong> {article.comment_count} </p>
      {" "}
      <p className="articlePreviewInfo"><strong>Votes:</strong> {article.votes} </p>
      {" "}
      <p className="articlePreviewInfo"><strong>Created:</strong> {dateShort} </p>
      <p></p>
    </section>
  );
};

export default ArticlePreview;
