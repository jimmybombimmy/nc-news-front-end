import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams, setSearchParams] = useSearchParams()

  const topic = searchParams.get('topic')
  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

  const handleOptionChange = (e) => {
    const newParams = new URLSearchParams (searchParams);
    const undefinedCheck = e.target.value.split(0,9)
    if (e.target.value !== "null" && e.target.value !== "undefined") {
      const splitMe = e.target.value.match(/[A-Za-z_]+/g);
      setOptionQuery(splitMe);
      newParams.set('sort_by', splitMe[0])
      newParams.set('order', splitMe[1])
      setSearchParams(newParams)
    } else {
      setOptionQuery([undefined, undefined]);
    }
  };


  useEffect(() => {
    if (sort_by === null) {
      setOptionQuery([undefined, undefined])
    } else {
      setOptionQuery([sort_by, order])
    }
    if (topic === null) {
      setTopicQuery(undefined)
    } else {
      setTopicQuery(topic)
    }
    
  }, [])


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
