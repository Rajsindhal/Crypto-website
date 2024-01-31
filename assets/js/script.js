'use strict';

const addEventOnEle = function(elem , type, callback){
    if(elem.length > 1){
        for(let i =0; i< elem.length; i++){
          elem[i].addEventListener(type , callback);
        }
    }else{
           elem.addEventListener(type , callback);
    }
}

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navtoggler = document.querySelector("[data-nav-toggler]");

const togglernavbar = function (){
    navbar.classList.toggle("active");
    navtoggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnEle(navtoggler,'click', togglernavbar)

const closenav = function (){
    navbar.classList.remove("active");
    navtoggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnEle(navbarLinks , 'click', closenav);


// header 

const header = document.querySelector("[data-header]");

const activeheader = function (){
    if(window.scrollY > 300){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}

addEventOnEle(window, 'scroll', activeheader);



// toggel active on add to fav 

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]")

const toggleActive = function () {
    this.classList.toggle("active");
}
 
addEventOnEle(addToFavBtns, 'click', toggleActive);


// scroll reavel effect 

const sections = document.querySelectorAll("[data-section]");

const reavelScroll = function (){
    for (let i = 0; i < sections.length; i++){
        if(sections[i].getBoundingClientRect().top < window.innerHeight / 1.5){
            sections[i].classList.add("active");

        }else{
            sections[i].classList.remove("active");
        }
    }
}

reavelScroll();

addEventOnEle(window, 'scroll', reavelScroll);