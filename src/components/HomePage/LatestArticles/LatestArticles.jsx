import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ArticlePreview from "./ArticlePreview";

const LatestArticles = ({allArticles, isLoading}) => {

  return (
    <section id="articlesListSection">

        <section>
          <h3 id="selectArticlesView">Latest</h3>
          <h2 id="latestArticlesHeader">Latest Articles</h2>
          {isLoading === true ? (
        <h2>Loading Articles...</h2>
      ) : (
          <section id="articlesListDisplay">
            {allArticles.map((article) => {
              return <ArticlePreview article={article} key={article.title} />;
            })}
          </section>
      )}
        </section>
    </section>
  );
};

export default LatestArticles;
