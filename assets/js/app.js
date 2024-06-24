

import { creations } from "./creations.js";

const hamburgerIcon = document.querySelector(".hamburgerIcon")
const closeIcon = document.querySelector(".close")
const icons = document.querySelector(".icons")
const nav = document.querySelector(".header .nav")
const contentBox = document.querySelector(".contentBox")



const displayCreationsGrid = ()=>{
    contentBox.innerHTML = "";
    creations.map((creation)=>{
        return contentBox.innerHTML += `
        <div class="grid">
          <img src=${creation.desktopImageUrl} class="desktop" alt=${creation.name}>
          <img src=${creation.mobileImageUrl} class="mobile" alt="">
          <div class="text">
            ${creation.name}
          </div>
        </div>   
        `
    })
}
displayCreationsGrid()

const displayNav = () =>{
  icons.classList.toggle("active")
  nav.classList.toggle("active")
}


hamburgerIcon.onclick = displayNav
closeIcon.onclick = displayNav