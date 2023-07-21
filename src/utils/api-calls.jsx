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

const getArticleComments = (id) => {
  return newsApi.get(`/articles/${id}/comments`)
    .then((response) => {
      return response.data
    })
}

const voteOnArticle = (id, vote) => {
  return newsApi.patch(`/articles/${id}`, vote)
    .then((response) => {
      return response
    })
}

export default {getAllArticles, getArticleById, getArticleComments, voteOnArticle}