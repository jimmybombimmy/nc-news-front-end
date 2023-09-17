import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api from "../../utils/api-calls";
import {urlGet} from "../../utils/utils";

const HomePage = () => {
  const navigate = useNavigate()
  const [allArticles, setAllArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState();
  const [optionQuery, setOptionQuery] = useState([undefined, undefined]);
  const [topicURL, setTopicURL] = useState("/");
  const [optionURL, setOptionURL] = useState("");


  const handleOptionChange = (e) => {
    console.log("e.tv", e.target.value, typeof e.target.value);
    if (e.target.value !== "null") {
      const splitMe = e.target.value.match(/[A-Za-z_]+/g);
      setOptionQuery(splitMe);
    } else if (e.target.value[0] === "undefined") {
      setOptionQuery([undefined, undefined]);
    }
    // navigate(urlGet(topicQuery, optionQuery))
  };



  useEffect(() => {
    setIsLoading(true);

    const url = urlGet(topicQuery, optionQuery);
    
    api
      .getAllArticles(url)
      .then((articles) => {
        
        setAllArticles(articles);
        return articles;
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [topicQuery, optionQuery]);

  return (
    <section className="homePageSectionFull">
      <section id="homePageWelcome">
        <h1>Welcome to nc-news</h1>
      </section>
      <main id="homePageMainBody">
        <Topics
          setTopicQuery={setTopicQuery}
          topicURL={topicURL}
          optionURL={optionURL}
          topicQuery={topicQuery}
          optionQuery={optionQuery}
          urlGet={urlGet}
          key={"topics"}
        />

        <LatestArticles
          allArticles={allArticles}
          isLoading={isLoading}
          topicQuery={topicQuery}
          handleOptionChange={handleOptionChange}
        />
      </main>
    </section>
  );
};

export default HomePage;
