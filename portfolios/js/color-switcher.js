const colorSwitcherToggle = document.querySelector(".color-switcher-toggler");
colorSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".color-switcher").classList.toggle("open");
});
window.addEventListener("scroll", ()=> {
    if (document.querySelector(".color-switcher").classList.contains("open")){
        document.querySelector(".color-switcher").classList.remove("open");
    }
});
const alternateStyles = document.querySelectorAll(".alternate-color-style");
function  setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if (color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}

const dayAndNight = document.querySelector(".day-night");
dayAndNight.addEventListener("click", () =>{
    dayAndNight.querySelector("i").classList.toggle("fa-sun");
    dayAndNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if (document.body.classList.contains("dark")){
        dayAndNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayAndNight.querySelector("i").classList.add("fa-moon");
    }
})
  


