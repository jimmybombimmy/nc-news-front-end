
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

  


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles" element={<HomePage />} />



      </Routes>
      <Footer />
    </main>
  );
}

export default App;
