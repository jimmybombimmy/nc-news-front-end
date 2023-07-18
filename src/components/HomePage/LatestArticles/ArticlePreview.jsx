import React from "react";

const ArticlePreview = ({article}) => {
  const date = new Date(article.created_at)
  const dateShort = date.toString().slice(4,15)

  return (
    <section className="articlePreview">
      <hr className="hr"></hr>
      <h3 className="articlePreviewTitle">{article.title}</h3>
      <a className="articlePreviewInfo" href="#">Author: {article.author}</a>
      <a className="articlePreviewInfo" href="#">Topic: {article.topic}</a>
      <a className="articlePreviewInfo" href="#">Comments: {article.comment_count}</a>
      <a className="articlePreviewInfo" href="#">Votes: {article.votes}</a>
      <a className="articlePreviewInfo" href="#">Created: {dateShort}</a>
      <p></p>
    </section>
  );
};

export default ArticlePreview;
