const dateConverter = (date) => {
  const dateLong = new Date(date)
  const dateShort = dateLong.toString().slice(4, 15)
  return dateShort
}

export default dateConverter