import React from "react";
import { useState, useEffect } from "react";

import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api from "../../utils/api-calls";

const HomePage = () => {
  const [allArticles, setAllArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState();
  const [optionValue, setOptionValue] = useState(["created_at", "desc"]);

  const handleOptionChange = (e) => {
    if (e.target.value !== "null") {
      const splitMe = e.target.value.match(/[A-Za-z_]+/g);
      setOptionValue(splitMe);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getAllArticles(topicQuery, optionValue[0], optionValue[1])
      .then((articles) => {
        setAllArticles(articles);
        return articles;
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [topicQuery, optionValue]);

  return (
    <section className="homePageSectionFull">
      <section id="homePageWelcome">
        <h1>Welcome to nc-news</h1>
      </section>
      <main id="homePageMainBody">
        <Topics setTopicQuery={setTopicQuery} key={"topics"} />

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
