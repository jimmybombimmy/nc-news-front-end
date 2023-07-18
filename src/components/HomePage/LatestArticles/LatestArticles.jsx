import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ArticlePreview from "./ArticlePreview";

const LatestArticles = ({allArticles}) => {
  console.log(allArticles)

  return (
    <section id="articlesListSection">

        <section>
          <h3 id="selectArticlesView">Latest</h3>
          <h2 id="latestArticlesHeader">Latest Articles</h2>
          <section id="articlesListDisplay">
            {allArticles.map((article) => {
              return <ArticlePreview article={article} key={article.title} />;
            })}
            <p id="endOfArticles">End of articles</p>
          </section>
          
        </section>
    </section>
  );
};

export default LatestArticles;
