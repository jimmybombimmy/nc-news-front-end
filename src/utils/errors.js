function handleVoteErr({response}, setDisableVotes, setVoteCount, setThumbUpColor, setThumbDownColor, setVoteCountColor) {
  setDisableVotes(true)
  setVoteCount(`ERR ${response.status}`)
  setThumbUpColor("grey")
  setThumbDownColor("grey")
  setVoteCountColor("grey")
}

export default handleVoteErr