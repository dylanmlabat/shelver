export default (state = null, action) => {
  switch (action.type) {

    case "SET_GOOGLE_BOOKS":
      return action.books

    default:
      return state;

  }
}
