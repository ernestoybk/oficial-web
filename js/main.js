
//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".client-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 6500,
    disableOnInteraction: false
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    },
    on: {
    autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
    }
});

//Website dark/light theme
//const themeBtn = document.querySelector(".theme-btn");

//themeBtn.addEventListener("click", () => {
//    document.body.classList.toggle("dark-theme");
//    themeBtn.classList.toggle("sun");

//    localStorage.setItem("saved-theme", getCurrentTheme());
//    localStorage.setItem("saved-icon", getCurrentIcon());
//});
//cconst getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";//cconst getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";
//cconst savedTheme = localStorage.getItem("saved-theme");
//const savedIcon = localStorage.getItem("saved-icon");

//if(savedTheme){
//    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
//    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
//}


//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});


scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 1600,
    delay: 80
})

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.nav-bar .navigation .nav-items a', {delay: 300, origin: 'left', interval: 200});
ScrollReveal().reveal('.nav-bar .logo', {delay: 100, origin: 'left'});


ScrollReveal().reveal('.home .info  h2, .section-title-01, .section-title-02', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.home .info  h3, .home .info p, .about-info .btn', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.home .info  .btn', {delay:500, origin: 'bottom'});
ScrollReveal().reveal('.home .scroll-down', {delay:600, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:400, origin: 'left',interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', {delay:300, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay:400, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay:300, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .client-swiper, .contact-left h2', {delay:500, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay:600, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group', {delay:300, origin: 'top', interval: 200});

//Coockies box
let popUp = document.getElementById("cookiePopup");
document.getElementById("acceptCookie").addEventListener("click", () => {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});

const checkCookie = () => {
    let input = document.cookie.split("=");
    if (input[0] == "myCookieName") {
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    }
    else{
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
}

window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};

