function handleVoteErr() {
  document.getElementById("thumbUp").disabled = true;
  document.getElementById("thumbDown").disabled = true;
  document.getElementById("thumbUp").style.color = "grey"
  document.getElementById("thumbDown").style.color = "grey"
  document.getElementById("thumbUp").style.backgroundColor = "lightgrey"
  document.getElementById("thumbDown").style.backgroundColor = "lightgrey"
  document.getElementById("voteCount").style.color = "grey"
  document.getElementById("voteCount").innerText = "ERR";
  document.getElementsByClassName("articleVotesBox")[0].style.backgroundColor = "lightgrey"
}

export default handleVoteErr