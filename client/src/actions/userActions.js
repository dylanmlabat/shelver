export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({credentials})
    })
    .then(response => response.json())
    .then(user => {
      dispatch(setCurrentUser(user))
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/find_user", {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(user => {
      dispatch(setCurrentUser(user))
    })
  }
}
