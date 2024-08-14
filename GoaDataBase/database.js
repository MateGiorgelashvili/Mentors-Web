const viewer = document.getElementById("viewer")
const mod = document.getElementById("moderator")
const body = document.getElementById("body")

mod.addEventListener("click", ()=>{
  body.setAttribute("contenteditable", "true")
})

viewer.addEventListener("click", ()=>{
  body.setAttribute("contenteditable", "false")
})