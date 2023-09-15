const menuHB = document.querySelector(".menu-hb")
const navElement = document.querySelector(".header__nav")

const menuHandle = (event) => {
  navElement.classList.toggle("active")
  if (navElement.classList.contains("active")) {
    menuHB.setAttribute("src", "./images/icon-close.svg")
    return
  }
  menuHB.setAttribute("src", "./images/icon-hamburger.svg")
}

menuHB.addEventListener("click", menuHandle)