import React from "react";
import { useState, useEffect } from "react";


import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api from "../../utils/api-calls";

const HomePage = () => {
  const [allArticles, setAllArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState();
  const [optionValue, setOptionValue] = useState([undefined, undefined]);
  const [topicURL, setTopicURL] = useState("/")


  const handleOptionChange = (e) => {
    console.log("e.tv", e.target.value, typeof e.target.value)
    if (e.target.value !== "null") {
      const splitMe = e.target.value.match(/[A-Za-z_]+/g);
      setOptionValue(splitMe);
    } else if (e.target.value[0] === "undefined")  {
      setOptionValue([undefined, undefined])
    }
  };

  



  useEffect(() => {
    setIsLoading(true);

    let tempTopicURL = ""

    console.log(topicQuery.length)
    
  if (topicQuery != undefined && topicQuery.length > 0) {
      setTopicURL(tempTopicURL += `?topic=${topicQuery}`)
      if (optionValue[0] !== undefined && optionValue[0] !== "undefined") {
        setTopicURL(tempTopicURL += `&sort_by=${optionValue[0]}&order=${optionValue[1]}`)
      }
    } else if (optionValue[0] !== undefined && optionValue[0] !== "undefined") {
      setTopicURL(tempTopicURL += `?sort_by=${optionValue[0]}&order=${optionValue[1]}`)
    }


    api
      .getAllArticles(topicURL)
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
        <Topics setTopicQuery={setTopicQuery} topicURL={topicURL} key={"topics"} />

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
