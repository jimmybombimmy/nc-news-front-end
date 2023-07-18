import React from "react";
import { Routes, Route } from "react-router-dom";
import Article from "../../Articles/Article";

const ArticlePreview = ({article}) => {

  

  return (
    <section className="articlePreview">
      <hr className="hr"></hr>
      <a className="articlePreviewTitle" href="/articles/:article_id" onClick={<Routes><Route path="/articles/:article_id" element={<Article />} /></Routes>}>{article.title}</a>
      <a className="articlePreviewInfo" href="#">Author: {article.author}</a>
      <a className="articlePreviewInfo" href="#">Topic: {article.topic}</a>
      <a className="articlePreviewInfo" href="#">Comments: {article.comment_count}</a>
      <a className="articlePreviewInfo" href="#">Votes: {article.votes}</a>
      <a className="articlePreviewInfo" href="#">Created At: {article.created_at}</a>
      <p></p>
    </section>
  );
};

export default ArticlePreview;
