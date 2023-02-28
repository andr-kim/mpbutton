let tabs = document.querySelector(".instruments-tabs");
let tabHeader = tabs.querySelector(".instruments-tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".instruments-tab-body > div");
let tabIndicator = tabs.querySelector(".instruments-tab-indicator");

for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderElements[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElements[i].classList.add("active");
        tabIndicator.style.left = '${i*33.33}%';
    });
}