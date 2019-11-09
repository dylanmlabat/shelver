const API_URL = process.env.REACT_APP_API_URL;

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

export const signup = user => {
  return dispatch => {
    return fetch(`${API_URL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user})
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

export const login = user => {
  return dispatch => {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
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
    return fetch(`${API_URL}/find_user`, {
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
    return fetch(`${API_URL}/logout`, {
      method: "DELETE",
      credentials: "include"
    })
  }
}
