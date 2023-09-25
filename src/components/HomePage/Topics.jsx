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
      <section id="mainInTopicBox">
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
            <Link className="topic" to={"#"}>Liked</Link>
            <Link className="topic" to={"#"}>Commented</Link>
            <Link className="topic" to={"#"}>Suggested</Link>
        </ul>
      </Collapse>
      </section>
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
              <Link className="topic" onClick={() => {
                setTopicQuery("");
              }}
              key={"all"} to={`/articles${urlGet(undefined, optionQuery)}`}>
                Show All
              </Link>
            {topics.map((topic) => {
              return (
                  <Link className="topic" onClick={() => {
                    setTopicQuery(topic.slug);
                  }}
                  key={topic.slug} to={`/articles${urlGet(topic.slug, optionQuery)}`}>
                    {topic.slug}
                  </Link>
                  
              
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
