import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api from "../../utils/api-calls";
import {urlGet} from "../../utils/utils";

const HomePage = () => {
  const [allArticles, setAllArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState();
  const [optionQuery, setOptionQuery] = useState([undefined, undefined]);
  const [allArticlesHeader, setAllArticlesHeader] = useState("Latest Articles")

  const [searchParams, setSearchParams] = useSearchParams()

  const topic = searchParams.get('topic')
  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

  function editAllArticlesHeader(sort_by, order) {
    console.log(sort_by)
    if (sort_by === "created_at") {
      if (order === "desc") {
        return setAllArticlesHeader("Latest Articles")
      } else if (order === "asc") {
        return setAllArticlesHeader("Oldest Articles")
      }
    } else if (sort_by === "votes") {
      if (order === "desc") {
        return setAllArticlesHeader("Highest Voted")
      } else if (order === "asc") {
        return setAllArticlesHeader("Lowest Voted")
      }
    } else if (sort_by === "comment_count") {
      if (order === "desc") {
        return setAllArticlesHeader("Most Comments")
      } else if (order === "asc") {
        return setAllArticlesHeader("Least Comments")
      }
    } else if (sort_by === "topic") {
      if (order === "desc") {
        return setAllArticlesHeader("Topics (Z - A)")
      } else if (order === "asc") {
        return setAllArticlesHeader("Topics (A - Z)")
      }
    }
  }

  const handleOptionChange = (e) => {
    const newParams = new URLSearchParams (searchParams);
    console.log(e.target.value)
    if (e.target.value !== "null" && e.target.value !== "undefined") {
      const splitMe = e.target.value.match(/[A-Za-z_]+/g);
      setOptionQuery(splitMe);
      editAllArticlesHeader(splitMe[0],splitMe[1])
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
          allArticlesHeader={allArticlesHeader}
          setAllArticlesHeader={setAllArticlesHeader}
        />
      </main>
    </section>
  );
};

export default HomePage;
