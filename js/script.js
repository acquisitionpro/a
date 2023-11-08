// const element = document.body;
// const button = document.querySelector(".button")
// const nav = document.querySelector("nav")
// const heads = document.querySelector("h1")
// const container= document.querySelector(".container")
// const display = document.querySelector(".nav-display")
// const navbar= document.querySelector(".nav-bar")
// const headlist1 = document.querySelector(".headlist1")
// const headlist2 = document.querySelector(".headlist2")
// const headlist3 = document.querySelector(".headlist3")
// const show1=document.querySelector(".show1")
// const show2=document.querySelector(".show2")
// const show3=document.querySelector(".show3")
// const theme= document.querySelector(".theme")
// const i = document.querySelectorAll(".fa-carat-right")
// const sectionone = document.querySelector(".section-one")
// const sectiontwo = document.querySelector(".section-two")
// const white = document.querySelector(".white")
// button.addEventListener("click", ()=>{
//     button.classList.toggle("active")
//     display.classList.toggle("display")
//     nav.classList.toggle("fixed")
//     navbar.classList.toggle("display")
//     nav.classList.toggle("sidebar")
// })
// headlist1.addEventListener("click", ()=>{
//     show1.classList.toggle("show")
// })
// headlist2.addEventListener("click", ()=>{
//     show2.classList.toggle("show")
// })
// headlist3.addEventListener("click", ()=>{
//     show3.classList.toggle("show")
//     i.classList.toggle("fa-caret-down")
// })

function themeChange(){
    var element = document.body;
    var nav = document.querySelector("nav")
    var themeChanger =  document.querySelector(".theme-changer")
    var themeChangerSmall =  document.querySelector(".theme-changer-small")
    element.classList.toggle("dark-mode")
    nav.classList.toggle("dark-mode")
    themeChanger.classList.toggle("bi-sun-fill")
    themeChangerSmall.classList.toggle("bi-sun-fill")
}


