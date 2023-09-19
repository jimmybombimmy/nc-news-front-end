import React from "react";
import ArticlePreview from "./ArticlePreview";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LatestArticles = ({ allArticles, isLoading, topicQuery, handleOptionChange}) => {
  let query = useQuery();

  return (
    <section id="articlesListSection">
      <section>
        <h3 id="selectArticlesView">
          <select onChange={handleOptionChange}>
            <option label="--Sort by--" value={"undefined"}></option>
            <optgroup label="Created At:">
              <option value={["created_at, desc"]}>
                {" "}
                Latest Article - Oldest Article
              </option>
              <option value={["created_at, asc"]}>
                Oldest Article - Latest Article
              </option>
            </optgroup>
            <optgroup label="Top voted:">
              <option value={["votes", "desc"]}>
                Highest Voted - Lowest Voted
              </option>
              <option value={["votes", "asc"]}>
                Lowest Voted - Highest Voted
              </option>
            </optgroup>
            <optgroup label="Comments:">
              <option value={["comment_count", "desc"]}>Most Comments - Least Comments</option>
              <option value={["comment_count", "asc"]}>Least Comments - Most Comments</option>
            </optgroup>
            <optgroup label="Topic">
              <option value={["topic", "asc"]}>Topics (A - Z)</option>
              <option value={["topic", "desc"]}>Topics (Z - A)</option>
            </optgroup>
          </select>{" "}
          
          {topicQuery !== undefined ? `- ${topicQuery}` : ""}
        </h3>
        <h2 id="latestArticlesHeader">Latest Articles</h2>
        {isLoading === true ? (
          <h2 className="loading">Loading Articles...</h2>
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
