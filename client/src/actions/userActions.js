export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const signup = credentials => {

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
    .then(response => {
      if (response.error) {
        return response.error
      } else {
        dispatch(setCurrentUser(response))
      }
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
    .then(response => {
      if (response.error) {
        return response.error
      } else {
        dispatch(setCurrentUser(response))
      }
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/api/v1/logout", {
      method: "DELETE",
      credentials: "include"
    })
  }
}
