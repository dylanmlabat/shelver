export default (state = null, action) => {
  switch (action.type) {

    case "SET_GOOGLE_BOOKS":
      if (action.books !== undefined) {
        return action.books
      } else {
        return null
      }

    default:
      return state;

  }
}
