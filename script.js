let navbar = document.querySelector(".navbar")
let menuBtn = document.querySelector("#menu")
let closeBtn =  document.querySelector("#close")

menuBtn.onclick = () => {
    navbar.classList.add("active")
}

closeBtn.onclick = () => {
    navbar.classList.remove("active")
}