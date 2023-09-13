import React from "react";
import api from "../../utils/api-calls";
import dateConverter from "../../utils/utils";
import Vote from "./Vote";
import CommentAdder from "./Comments/CommentAdder";
import CommentSection from "./Comments/CommentSection";

import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Article = ({scrollToSection, scrollToTop, commentNotify}) => {
  const [articleData, setArticleData] = useState([]);
  const [isArticleLoading, setIsArticleLoading] = useState(true);

  const [articleComments, setArticleComments] = useState([]);
  const [articleCommentsLoading, setArticleCommentsLoading] = useState(true);
  const [commentNotification, setCommentNotification] = useState("");

  const { article_id } = useParams();

  useEffect(() => {
    setIsArticleLoading(true);
    setArticleCommentsLoading(true);
    api
      .getArticleById(article_id)
      .then((response) => {
        return setArticleData(response);
      })
      .then(() => {
        setIsArticleLoading(false);
      })
      .then(() => {
        return api.getArticleComments(article_id);
      })
      .then((response) => {
        setArticleComments(response.comments);
      })
      .then(() => {
        setArticleCommentsLoading(false);
      });
  }, []);

  return (
    <section>
      {isArticleLoading === true ? (
        <h2>Loading Article...</h2>
      ) : (
        <section id="articlePage">
          <section id="articleTopHalf">
            <section className="articleTitleBox">
              <Vote articleData={articleData} />
              <h1 className="articleTitle">{articleData.title}</h1>
            </section>
            <section className="articleInfoBox">
              <p className="articleInfo">author: {articleData.author}</p>
              <p className="articleInfo">topic: {articleData.topic}</p>
              <p className="articleInfo">
                created: {dateConverter(articleData.created_at)}
              </p>
            </section>
          </section>
          <section className="articleBody">
            <img
              className="articleImage"
              src={articleData.article_img_url}
              alt="User Uploaded Article Image"
            />
            <p className="articleBody">{articleData.body}</p>
          </section>
          <section className="bodyCommentSeparation"></section>
          <CommentAdder
            articleComments={articleComments}
            setArticleComments={setArticleComments}
            articleData={articleData}
            commentNotification={commentNotification}
            setCommentNotification={setCommentNotification}
            scrollToSection={scrollToSection}
            commentNotify={commentNotify}
          />
          <CommentSection
            articleComments={articleComments}
            articleCommentsLoading={articleCommentsLoading}
            
          />
          <section id="commentsEnd">
            <p>End of comments</p>
            <button onClick={() => {scrollToSection(scrollToTop)}}>Scroll to top</button>
          </section>
        </section>
      )}
    </section>
  );
};

export default Article;
