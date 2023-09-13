import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import Article from "./components/Articles/Article";

import { Routes, Route } from "react-router-dom";
import { useRef } from "react";

// const [articleId, setArticleId] = 
  


function App() {

  const commentNotify = useRef(null);
  const scrollToTop = useRef(null);

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <Header scrollToTop={scrollToTop}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<Article scrollToSection={scrollToSection} scrollToTop={scrollToTop} commentNotify={commentNotify}/>}  />



      </Routes>
      <Footer />
    </main>
  );
}

export default App;
