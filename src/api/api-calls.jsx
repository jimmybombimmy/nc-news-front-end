import axios from "axios";

const getAllArticles = () => {
  return axios
    .get("https://nc-news-ajy0.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
};

export default getAllArticles