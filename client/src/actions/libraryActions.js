const API_URL = process.env.REACT_APP_API_URL;

export const createPurchase = (book, user) => {
  return dispatch => {
    return fetch(`${API_URL}/purchases`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user, book})
    })
    .then(response => response.json())
    .catch(error => {return error})
  }
}
