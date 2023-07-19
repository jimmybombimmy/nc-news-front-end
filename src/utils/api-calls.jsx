import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-ajy0.onrender.com/api"
})

const getAllArticles = () => {
  return newsApi.get("/articles")
    .then((response) => {
      return response.data.articles;
    })
};

const getArticleById = (id) => {
  return newsApi.get(`/articles/${id}`)
    .then((response) => {
      return response.data
    })
}

export default {getAllArticles, getArticleById}