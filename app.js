

const spoilerTitle = document.getElementById("sp-title");
    document.addEventListener("DOMContentLoaded", ()=>{
        spoilerTitle.classList.add("active");
    })


const logo = document.getElementById("logo");
document.addEventListener("DOMContentLoaded", ()=>{
    logo.classList.add("fade");
})


// Scroll To Top button ---------------------
var top = document.getElementById("top");
const topButton = document.getElementById("btn");

function scrollTop(){
    topButton.addEventListener("click", ()=>{
        top.scrollTo("x: 0", "y: 0")
    })}
scrollTop()



window.addEventListener("scroll", ()=>{
    const box = top.getBoundingClientRect()
    xValue = 150
    if(box.top >= xValue){
        topButton.classList.add("show")
    }
    else{
        topButton.classList.remove("show")
    }
})
    

// Scroll To Top button End ---------------------


// const navBar = document.querySelector("nav");
// const ledLink = document.getElementById("led-link");
// document.createElement("div")

// ledLink.addEventListener("pointerover", ()=>{
// navBar.appendChild("newNav")
// })
