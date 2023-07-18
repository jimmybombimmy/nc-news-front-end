import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";


import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";


const HomePage = () => {

  const [allArticles, setAllArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-news-ajy0.onrender.com/api/articles")
      .then((response) => {
        const articles = response.data.articles;
        setAllArticles(articles);
        return articles;
      })
      .then((articles) => {
        setIsLoading(false);
        
      });
  }, []);
  

  return (
    <section className="homePageSectionFull">
      <section id="homePageWelcome">
        <h1>Welcome to nc-news</h1>
      </section>
      <main id="homePageMainBody">
        <Topics />
     
        <LatestArticles allArticles={allArticles} isLoading={isLoading}/>
      {/* )} */}
      </main>
    </section>
  );
};

export default HomePage;
