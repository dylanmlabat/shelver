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
      dispatch(setCurrentUser(response))
    })
    .catch(error => {return error})
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
      dispatch(setCurrentUser(response))
    })
    .catch(error => {return error})
  }
}

export const findUser = (user) => {
  return dispatch => {
    return fetch(`${API_URL}/${user}`, {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => {return error})
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
      dispatch(setCurrentUser(response))
    })
    .catch(error => {return error})
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
