export default (state = null, action) => {
  switch (action.type) {

    case "SET_GOOGLE_BOOKS":
      if (action.books !== undefined) {
        const books = action.books.map(book => {
          return {...book, disabled: false}
        })
        return books
      } else {
        return null
      }

    case "DISABLE_GOOGLE_BOOK":
      const index = action.index
      const disabledBook = {...action.book, disabled: true}
      return [...state.map(
        (book, i) => i === index ? disabledBook : book
      )]

    default:
      return state;

  }
}
