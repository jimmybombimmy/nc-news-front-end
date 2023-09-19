const dateConverter = (date) => {
  const dateLong = new Date(date)
  const dateShort = dateLong.toString().slice(4, 15)
  return dateShort
}

const urlGet = (topicQuery, optionQuery) => {

  let tempTopicURL = ""

    
  if (topicQuery != undefined && topicQuery.length > 0) {
      tempTopicURL += `?topic=${topicQuery}`
      if (optionQuery[0] !== undefined && optionQuery[0] !== "undefined") {
        tempTopicURL += `&sort_by=${optionQuery[0]}&order=${optionQuery[1]}`
      }
    } else if (optionQuery[0] !== undefined && optionQuery[0] !== "undefined") {
      tempTopicURL += `?sort_by=${optionQuery[0]}&order=${optionQuery[1]}`
    }
  
    return tempTopicURL
}

export {dateConverter, urlGet}