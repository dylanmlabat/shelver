const API_URL = process.env.REACT_APP_API_URL;

export const addUserBook = (response, book) => {
  return {
    type: "ADD_USER_BOOK",
    response, book
  }
}

export const removeUserBook = id => {
  return {
    type: "REMOVE_USER_BOOK",
    id
  }
}

export const createPurchase = (book, user) => {
  return dispatch => {
    return fetch(`${API_URL}/purchases`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user, book})
    })
    .then(response => response.json())
    .then(response => dispatch(addUserBook(response, book)))
    .catch(error => {return error})
  }
}

export const destroyPurchase = (purchaseId) => {
  return dispatch => {
    return fetch(`${API_URL}/purchases/${purchaseId}`, {
      method: "DELETE",
      credentials: "include"
    })
    .then(dispatch(removeUserBook(purchaseId)))
  }
}
