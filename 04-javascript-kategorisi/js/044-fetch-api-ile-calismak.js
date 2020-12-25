// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// JSON dosyadan veri cekmek:
fetch("data/settings.json").then(
  response => response.json()
).then(responseJson => {
  console.log(responseJson)
  console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

// API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
  })
})