const dateConverter = (date) => {
  const dateLong = new Date(date)
  const dateShort = dateLong.toString().slice(0, 15)
  return dateShort
}

export default dateConverter