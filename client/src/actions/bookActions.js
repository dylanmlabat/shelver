const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const setGoogleBooks = books => {
  return {
    type: "SET_GOOGLE_BOOKS",
    books
  }
}

export const disableGoogleBook = (book, index) => {
  return {
    type: "DISABLE_GOOGLE_BOOK",
    book, index
  }
}

export const fetchGoogleBooks = query => {
  return dispatch => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`, {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(response => {
      dispatch(setGoogleBooks(response.items))
    })
    .catch(error => {return error})
  }
}

export const findOrCreateBook = book => {
  return dispatch => {
    return fetch(`${API_URL}/books`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        api_id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        cover: book.volumeInfo.imageLinks.smallThumbnail,
        publisher: book.volumeInfo.publisher,
        publish_date: book.volumeInfo.publishedDate,
        page_count: book.volumeInfo.pageCount,
        summary: book.volumeInfo.description
      })
    })
    .then(response => response.json())
    .catch(error => {return error})
  }
}
