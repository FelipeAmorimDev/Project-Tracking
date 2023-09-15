const menuHB = document.querySelector(".menu-hb")
const navElement = document.querySelector(".header__nav")

menuHB.addEventListener("click",(event) => {
  navElement.classList.toggle("active")
  if(navElement.classList.contains("active")){
    console.log(menuHB.setAttribute("src","./images/icon-close.svg"))
    return
  }
  menuHB.setAttribute("src","./images/icon-hamburger.svg")
})