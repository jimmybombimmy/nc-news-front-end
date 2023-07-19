import React from "react";
import { useState, useEffect } from "react";


import Topics from "./Topics";
import LatestArticles from "./LatestArticles/LatestArticles";
import api  from "../../utils/api-calls";



const HomePage = () => {

  const [allArticles, setAllArticles] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
      api.getAllArticles()
      .then((articles) => {
        setAllArticles(articles);
        return articles;
      })
      .then(() => {
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
      </main>
    </section>
  );
};

export default HomePage;
