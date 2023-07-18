import React from "react";

const ArticlePreview = ({article}) => {
  // console.log(article);
  return (
    <section className="articlePreview">
      <hr className="hr"></hr>
      <h3 className="articlePreviewTitle">{article.title}</h3>
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
