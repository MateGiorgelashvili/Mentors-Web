const button = document.getElementById("login")
const name = document.getElementById("name")
const password = document.getElementById("password")
const mod = document.getElementById("mod")
const user = document.getElementById("user")
const account = {
  name: "none",
  password: "none"
}
button.addEventListener("click", ()=>{
  account.name = name.value
  account.password = password.value
})


