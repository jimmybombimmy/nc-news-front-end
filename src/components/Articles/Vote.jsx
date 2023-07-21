import React from "react";
import { useState } from "react";
import api from "../../utils/api-calls";
import handleVoteErr from "../../utils/errors";

const Vote = ({ articleData }) => {
  const [articleLiked, setArticleLiked] = useState(false);
  const [articleDisliked, setArticleDisliked] = useState(false);

  const [thumbUpColor, setThumbUpColor] = useState("grey");
  const [thumbDownColor, setThumbDownColor] = useState("grey");
  const [voteCountColor, setVoteCountColor] = useState("grey");
  const [voteCount, setVoteCount] = useState(articleData.votes);

  const [disableVotes, setDisableVotes] = useState(false)

  function articleVote(num) {
    setVoteCount(voteCount + num);
    return { inc_votes: num };
  }

  return (
    <section className="articleVotesSection">
      <section className="articleVotesBox">
        <button
          id="thumbUp"
          className="material-symbols-outlined thumbs"
          disabled={disableVotes}
          style={{ color: thumbUpColor }}
          onClick={() => {
            if (articleLiked === false) {
              if (articleDisliked === true) {
                api
                  .voteOnArticle(articleData.article_id, articleVote(2))
                  .catch((err) => {handleVoteErr(err, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor)});
                setArticleDisliked(false);
              } else {
                api
                  .voteOnArticle(articleData.article_id, articleVote(1))
                  .catch((err) => {handleVoteErr(err, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor)});
              }
              setVoteCountColor("green");
              setThumbUpColor("green");
              setThumbDownColor("grey");
              setArticleLiked(true);
            } else {
              api.voteOnArticle(articleData.article_id, articleVote(-1));
              setVoteCountColor("grey");
              setThumbUpColor("grey");
              setArticleLiked(false);
            }
          }}
        >
          thumb_up
        </button>

        <p id="voteCount" style={{ color: voteCountColor }}>
          {voteCount}
        </p>
        <button
          id="thumbDown"
          className="material-symbols-outlined thumbs"
          disabled={disableVotes}
          style={{ color: thumbDownColor }}
          onClick={() => {
            if (articleDisliked === false) {
              if (articleLiked === true) {
                api
                  .voteOnArticle(articleData.article_id, articleVote(-2))
                  .catch((err) => {handleVoteErr(err, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor)});
                setArticleLiked(false);
              } else {
                api
                  .voteOnArticle(articleData.article_id, articleVote(-1))
                  .catch((err) => {handleVoteErr(err, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor)});
              }
              setVoteCountColor("red");
              setThumbDownColor("red");
              setThumbUpColor("grey");
              setArticleDisliked(true);
            } else {
              api.voteOnArticle(articleData.article_id, articleVote(1));
              setVoteCountColor("grey");
              setThumbDownColor("grey");
              setArticleDisliked(false);
            }
          }}
        >
          thumb_down
        </button>
      </section>
    </section>
  );
};

export default Vote;
