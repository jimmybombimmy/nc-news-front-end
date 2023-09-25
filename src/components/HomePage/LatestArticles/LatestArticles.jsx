import React from "react";
import ArticlePreview from "./ArticlePreview";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LatestArticles = ({ allArticles, isLoading, topicQuery, handleOptionChange, allArticlesHeader, setAllArticlesHeader}) => {
  
  let query = useQuery();

  return (
    <section id="articlesListSection">
      <section>
        <h2 id="selectArticlesView">
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
        </h2>
        <h2 id="latestArticlesHeader">{allArticlesHeader}</h2>
        {isLoading === true ? (
          <h3 className="loading">Loading Articles...</h3>
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
