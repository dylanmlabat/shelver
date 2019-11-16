export default (state = null, action) => {
  switch (action.type) {

    case "SET_CURRENT_USER":
      return action.user

    case "CLEAR_CURRENT_USER":
      return null

    case "ADD_USER_BOOK":
      const book = {...action.book, "purchase_ids": [action.response.id]}
      return {...state, books: [...state.books, book]}

    case "REMOVE_USER_BOOK":
      const purchaseId = action.id
      return {
        ...state,
        books: state.books.filter(book => book.purchase_ids !== purchaseId)
      }

    default:
      return state;

  }
}
