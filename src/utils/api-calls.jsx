import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-ajy0.onrender.com/api"
})

const getAllArticles = (topicURL) => {


  return newsApi.get(`/articles${topicURL}`)
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

const getTopics = () => {
  return newsApi.get('/topics')
    .then((response) => {
      return response
    })
}

const voteOnArticle = (id, vote) => {
  return newsApi.patch(`/articles/${id}`, vote)
    .then((response) => {
      return response
    })
}

const postComment = (id, commentInfo) => {
  return newsApi.post(`/articles/${id}/comments`, commentInfo)
    .then((response) => {
      return response
    })
    .catch()
}



export default {getAllArticles, getArticleById, getTopics, getArticleComments, voteOnArticle, postComment}