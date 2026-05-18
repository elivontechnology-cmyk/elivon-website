// =========================
// MOBILE MENU TOGGLE
// =========================

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// =========================
// SCROLL REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    for (let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 120;

        if (elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
// =========================
// LIGHTBOX FUNCTIONALITY
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Select ALL portfolio images
const images = document.querySelectorAll(".portfolio-card img");

// Open image
images.forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close with X
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});