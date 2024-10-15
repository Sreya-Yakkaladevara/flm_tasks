let tabs = document.querySelectorAll(".tab");
let panels = document.querySelectorAll(".panel")
tabs.forEach((tab)=> tab.addEventListener("click",onTabClick));

function onTabClick(e){
    tabs.forEach((tab)=> {
        tab.children[0].classList.remove("border-SoftRed","border-b-4");
    })
    panels.forEach((panel)=> panel.classList.add("hidden"));

    e.target.classList.add("border-SoftRed","border-b-4");

    const classString = e.target.getAttribute("data-target");

    document.getElementById("panels").getElementsByClassName(classString)[0].classList.remove("hidden")
}

let hamburger = document.getElementById("icon-hamburger");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

hamburger.addEventListener("click",hamburgeropen);
close.addEventListener("click",hamburgerclose);


function hamburgeropen(){
    menu.classList.toggle("hidden");
}
function hamburgerclose(){
    menu.classList.toggle("hidden")
}
let ans = document.querySelectorAll(".ans");
console.log(ans)