import React from "react";
import api from "../../utils/api-calls";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Topics = ({ setTopicQuery, optionQuery, urlGet }) => {
  let query = useQuery();

  const [topics, setTopics] = useState({});
  const [topicsLoading, setTopicsLoading] = useState(true);
  const [openMain, setOpenMain] = useState(true);
  const [openTopics, setOpenTopics] = useState(true);

  function collapseArrow(expandState) {
    if (expandState === true) {
      return "v";
    } else {
      return "<";
    }
  }

  useEffect(() => {
    api.getTopics().then(({ data }) => {
      setTopics(data);
      setTopicsLoading(false);
    });
  }, []);

  return (
    <section id="topicsBox">
      <h1
        className="topicBoxHeader"
        onClick={() => setOpenMain(!openMain)}
        aria-controls="example-collapse-text"
        aria-expanded={openMain}
      >
        <span className="topicBoxArrow">{collapseArrow(openMain)}</span> <span className="topicBoxHeaderText">Main</span>
      </h1>
      <Collapse in={openMain}>
        <ul className="topicList" id="expand-collapse-text">
          <li>
            <Link className="topic" to={"#"}>Liked</Link>
          </li>
          <li>
            <Link className="topic" to={"#"}>Commented</Link>
          </li>
          <li>
            <Link className="topic" to={"#"}>Suggested</Link>
          </li>
        </ul>
      </Collapse>
      <h1
        className="topicBoxHeader"
        onClick={() => setOpenTopics(!openTopics)}
        aria-controls="example-collapse-text"
        aria-expanded={openTopics}
      >
        <span className="topicBoxArrow">{collapseArrow(openTopics)}</span> <span className="topicBoxHeaderText">Topics</span> 
      </h1>
      {topicsLoading !== false ? (
        <p className="loading">Loading...</p>
      ) : topics.length === 0 ? (
        <h3>No comments to display</h3>
      ) : (
        <Collapse in={openTopics}>
          <ul className="topicList">
            <li
              onClick={() => {
                setTopicQuery("");
              }}
              key={"all"}
            >
              <Link className="topic" to={`/articles${urlGet(undefined, optionQuery)}`}>
                Show All
              </Link>
            </li>
            {topics.map((topic) => {
              return (
                <li
                  onClick={() => {
                    setTopicQuery(topic.slug);
                  }}
                  key={topic.slug}
                >
                  <Link className="topic" to={`/articles${urlGet(topic.slug, optionQuery)}`}>
                    {topic.slug}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapse>
      )}
      <section className="leftBarSiteLinks">
        <a href="#" className="poop">Lorem </a>•<a href="#"> Ipsum </a>
        <a href="#">dolor </a>•<a href="#"> sit </a>•<a href="#"> amet </a>
        <a href="#"> consectetur </a>•<a href="#"> adipiscing </a>•
        <a href="#"> elit </a>
      </section>
    </section>
  );
};

export default Topics;
