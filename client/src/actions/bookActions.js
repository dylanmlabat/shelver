const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const getGoogleSearch = () => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=vonnegut&key=${API_KEY}`, {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(response => {console.log(response.items)})
}
