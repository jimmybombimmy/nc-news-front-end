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
      .get("http://localhost:9090/api/articles")
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
        {allArticles.length === 0 ? (
        <h2>Loading Articles...</h2>
      ) : (
        <LatestArticles allArticles={allArticles}/>
      )}
      </main>
    </section>
  );
};

export default HomePage;
