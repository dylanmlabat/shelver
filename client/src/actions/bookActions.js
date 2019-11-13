const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const setGoogleBooks = books => {
  return {
    type: "SET_GOOGLE_BOOKS",
    books
  }
}

export const fetchGoogleBooks = (query) => {
  const searchTerm = query
  return dispatch => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`, {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        return response.error
      } else {
        dispatch(setGoogleBooks(response.items))
      }
    })
  }
}
