import { addUser } from "./index.js"
let firstname =document.querySelector(".firstname")
let lastname=document.querySelector(".lastname")
const btn=document.getElementById("btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let newUser={
    
    firstname:firstname.value,
    lastname:lastname.value  
}
firstname.value=""
lastname.value=""
addUser().add(newUser)
localStorage.getItem("users" ,)
})