const normalizeRating = (rating) => {
  const cleanRating = rating.replace(/[%./]/, '').match(/\d{2}/)[0]
  return cleanRating === '10' ? 10 : cleanRating / 10
}

export default {
  normalizeRating
}
