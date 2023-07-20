import React from "react";
import api from "../../utils/api-calls";
import handleVoteErr from "../../utils/errors";

const Vote = ({ articleData }) => {
  let votes = articleData.votes;
  let trueVotes;

  let articleLiked = false;
  let articleDisliked = false;

  function articleVote(num) {
    if (trueVotes === undefined) {
      trueVotes = votes + num;
      document.getElementById("voteCount").innerText = trueVotes;
    } else {
      trueVotes += num;
      document.getElementById("voteCount").innerText = trueVotes;
    }
    return { inc_votes: num };
  }

  

  return (
    <section className="articleVotesSection">
      <section className="articleVotesBox">
        <button
          id="thumbUp"
          className="material-symbols-outlined thumbs"
          disabled={false}
          onClick={() => {
            if (articleLiked === false) {
              if (articleDisliked === true) {
                api
                  .voteOnArticle(articleData.article_id, articleVote(2))
                  .catch(handleVoteErr)
                articleDisliked = false;
              } else {
                api
                  .voteOnArticle(articleData.article_id, articleVote(1))
                  .catch(handleVoteErr)
              }
              document.getElementById("voteCount").style.color = "green";
              document.getElementById("thumbUp").style.color = "green";
              document.getElementById("thumbDown").style.color = "grey";
              articleLiked = true;
            } else {
              api.voteOnArticle(articleData.article_id, articleVote(-1));
              document.getElementById("voteCount").style.color = "grey";
              document.getElementById("thumbUp").style.color = "grey";
              articleLiked = false;
            }
          }}
        >
          thumb_up
        </button>

        <p id="voteCount">{votes}</p>
        <button
          id="thumbDown"
          className="material-symbols-outlined thumbs"
          disabled={false}
          onClick={() => {
            if (articleDisliked === false) {
              if (articleLiked === true) {
                api
                  .voteOnArticle(articleData.article_id, articleVote(-2))
                  .catch(handleVoteErr)
                articleLiked = false;
              } else {
                api
                  .voteOnArticle(articleData.article_id, articleVote(-1))
                  .catch(handleVoteErr)
              }
              document.getElementById("voteCount").style.color = "red";
              document.getElementById("thumbDown").style.color = "red";
              document.getElementById("thumbUp").style.color = "grey";
              articleDisliked = true;
            } else {
              api.voteOnArticle(articleData.article_id, articleVote(1));
              document.getElementById("voteCount").style.color = "grey";
              document.getElementById("thumbDown").style.color = "grey";
              articleDisliked = false;
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
