import React from "react";
import { useState, useEffect } from "react";


import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api  from "../../utils/api-calls";



const HomePage = () => {

  const [allArticles, setAllArticles] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState()

  useEffect(() => {
    setIsLoading(true);
      api.getAllArticles(topicQuery)
      .then((articles) => {
        setAllArticles(articles);
        return articles;
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [topicQuery]);
  

  return (
    <section className="homePageSectionFull">
      <section id="homePageWelcome">
        <h1>Welcome to nc-news</h1>
      </section>
      <main id="homePageMainBody">
        <Topics setTopicQuery={setTopicQuery} key={"topics"}/>
     
        <LatestArticles allArticles={allArticles} isLoading={isLoading} topicQuery={topicQuery}/>
      </main>
    </section>
  );
};

export default HomePage;
