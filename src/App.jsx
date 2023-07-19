import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import Article from "./components/Articles/Article";

import { Routes, Route } from "react-router-dom";

// const [articleId, setArticleId] = 
  


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<Article/>}  />



      </Routes>
      <Footer />
    </main>
  );
}

export default App;
