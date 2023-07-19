import React from "react";
import api from "../../utils/api-calls";
import dateConverter from "../../utils/utils";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticleById(article_id)
      .then((response) => {
        return setArticleData(response);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      {isLoading === true ? (
        <h2>Loading Article...</h2>
      ) : (
        <section id="articlePage">
          <section id="articleTopHalf">
            <section className="articleVotesBox">
              <p className="articleInfo">votes to be put here {articleData.votes}</p>
            </section>
            <section className="articleInfoBox">
              <h1 className="articleTitle">{articleData.title}</h1>
              <p className="articleInfo">author: {articleData.author}</p>
              <p className="articleInfo">topic: {articleData.topic}</p>
              <p className="articleInfo">
                created: {dateConverter(articleData.created_at)}
              </p>
            </section>
          </section>
          <section classname="articleBody">
            <img
              className="articleImage"
              src={articleData.article_img_url}
              alt="User Uploaded Article Image"
            />
            <p className="articleBody">{articleData.body}</p>
          </section>
          <section id="commentSection">
            <h5>Comments down here</h5>
          </section>
        </section>
      )}
    </section>
  );
};

export default Article;
