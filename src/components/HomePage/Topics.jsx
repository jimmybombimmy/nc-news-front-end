import React from "react";
import api from "../../utils/api-calls";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Topics = ({ setTopicQuery }) => {
  let query = useQuery();

  const [topics, setTopics] = useState({});
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    api.getTopics().then(({ data }) => {
      setTopics(data);
      setTopicsLoading(false);
    });
  }, []);

  return (
    <section id="topicsBox">
      <h3 id="topicsHeader">Topics</h3>
      {topicsLoading !== false ? (
        <p className="loading">Loading...</p>
      ) : topics.length === 0 ? (
        <h3>No comments to display</h3>
      ) : (
        <ul id="topicList">
          <li
            className="topic"
            onClick={() => {
              setTopicQuery();
            }}
            key={"all"}
          >
            <Link to={`/articles/`}>Show All</Link>
          </li>
          {topics.map((topic) => {
            return (
              <li
                className="topic"
                onClick={() => {
                  setTopicQuery(topic.slug);
                }}
                key={topic.slug}
              >
                <Link to={`/articles?topic=${topic.slug}`}> {topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Topics;
