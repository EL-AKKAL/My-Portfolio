const mobile = document.querySelector(".header .navbar .navlist .mobilestyle");
const menu = document.querySelector(".header .navbar .navlist ul");
const header = document.querySelector(".header.container");
const clicking = document.querySelectorAll(".header .navbar .navlist ul li a");


mobile.addEventListener("click",() => {
    mobile.classList.toggle("activeMobile");
    menu.classList.toggle("activeMenu");
})

document.addEventListener("scroll" , () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
        header.style.backgroundColor='#29323c';
    }
    else
    {
        header.style.backgroundColor= 'transparent';
    }
})

clicking.forEach(element => {
    element.addEventListener("click" , ()=>{
        mobile.classList.toggle("activeMobile");
        menu.classList.toggle("activeMenu");
    });
});