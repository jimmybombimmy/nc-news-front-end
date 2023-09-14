import React from "react";
import ArticlePreview from "./ArticlePreview";

const LatestArticles = ({ allArticles, isLoading, topicQuery}) => {

  return (
    <section id="articlesListSection">
      <section>
        <h3 id="selectArticlesView">Latest {topicQuery !== undefined ? (`- ${topicQuery}` ) : ("") }</h3>
        <h2 id="latestArticlesHeader">Latest Articles</h2>
        {isLoading === true ? (
          <h2>Loading Articles...</h2>
        ) : (
          <section id="articlesListDisplay">
            {allArticles.map((article) => {
              return <ArticlePreview article={article} key={article.title} />;
            })}
            <p id="endOfArticles">End of articles</p>
          </section>
        )}
        </section>
    </section>
  );
};

export default LatestArticles;
