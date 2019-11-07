export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const login = credentials => {
  return dispatch => {
    console.log("credentials are", credentials)
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({credentials})
    })
    .then(response => response.json())
    .then(user => {
      dispatch(setCurrentUser(user))
    })
  }
}
