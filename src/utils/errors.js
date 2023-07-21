function handleVoteErr({response}, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor, setVoteBorderColor) {
  setDisableVotes(true)
  setVoteCount(`!ERR ${response.status}!`)
  setThumbUpColor("lightgrey")
  setThumbDownColor("lightgrey")
  setVoteCountColor("red")
  setVoteBorderColor("red")
  alert(`Error ${response.status}: ${response.data.message}.\nYour vote has not registered.\nPlease try again later. :(`)
}

export default handleVoteErr