/* ==========================================
   SHWE SIN NATURAL PRODUCTS
   SCRIPT.JS VERSION 5
   Part 1
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MOBILE MENU TOGGLE
    ========================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }

    /* ==========================
       CLOSE MENU WHEN CLICK LINK
    ========================== */

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

        });

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.length > 1) {

                const target = document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                }

            }

        });

    });

    /* ==========================
       ACTIVE MENU HIGHLIGHT
    ========================== */

    const currentPage = window.location.pathname.split("/").pop();

    navItems.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   PRODUCT SEARCH
========================================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        const products = document.querySelectorAll(".card");

        products.forEach(function (product) {

            const title = product.querySelector("h3");
            const description = product.querySelector("p");

            let searchText = "";

            if (title) {
                searchText += title.textContent.toLowerCase();
            }

            if (description) {
                searchText += " " + description.textContent.toLowerCase();
            }

            if (searchText.includes(keyword)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

/* ==========================================
   NO RESULT MESSAGE
========================================== */

function checkNoResults() {

    const products = document.querySelectorAll(".card");

    const noResult = document.getElementById("noResult");

    if (!noResult) return;

    let visible = 0;

    products.forEach(function (product) {

        if (product.style.display !== "none") {

            visible++;

        }

    });

    if (visible === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}

if (searchInput) {

    searchInput.addEventListener("keyup", checkNoResults);

}

/* ==========================================
   PRODUCT CATEGORY FILTER
========================================== */

const categoryButtons = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".card");

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class */

        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const category = this.getAttribute("data-category");

        productCards.forEach(function (card) {

            if (category === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(category)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

        /* Update No Result Message */

        if (typeof checkNoResults === "function") {
            checkNoResults();
        }

    });

});

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {

    /* Create Lightbox */

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const closeButton = document.createElement("span");
    closeButton.className = "close-lightbox";
    closeButton.innerHTML = "&times;";

    const lightboxImage = document.createElement("img");

    lightbox.appendChild(closeButton);
    lightbox.appendChild(lightboxImage);

    document.body.appendChild(lightbox);

    /* Open Lightbox */

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImage.src = this.src;

            lightboxImage.alt = this.alt;

        });

    });

    /* Close Button */

    closeButton.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

    /* Close When Click Background */

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

    /* ESC Key */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.style.display = "none";

        }

    });

}
/* ==========================================
   SCROLL ANIMATION
========================================== */

const animatedElements = document.querySelectorAll(
    ".card, .about-container, .gallery-grid img, .hero-left, .hero-right"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {

    threshold: 0.15

});

animatedElements.forEach(function (element) {

    observer.observe(element);

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "#0b6b3a";

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

        navbar.style.transition = "0.3s";

    } else {

        navbar.style.background = "#0b6b3a";

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    }

});

/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function(){

        this.style.transform = "translateY(0)";

    });

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollTopButton = document.createElement("button");

scrollTopButton.id = "scrollTopBtn";
scrollTopButton.innerHTML = "↑";
scrollTopButton.title = "Back to Top";

document.body.appendChild(scrollTopButton);

scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "20px";
scrollTopButton.style.left = "20px";
scrollTopButton.style.width = "50px";
scrollTopButton.style.height = "50px";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "50%";
scrollTopButton.style.background = "#0b6b3a";
scrollTopButton.style.color = "#ffffff";
scrollTopButton.style.fontSize = "24px";
scrollTopButton.style.cursor = "pointer";
scrollTopButton.style.display = "none";
scrollTopButton.style.zIndex = "9999";
scrollTopButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";
scrollTopButton.style.transition = ".3s";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopButton.style.display = "block";

    } else {

        scrollTopButton.style.display = "none";

    }

});

scrollTopButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   IMAGE ERROR HANDLER
========================================== */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn("Image not found:", this.src);

        this.alt = "Image unavailable";

    });

});

/* ==========================================
   EXTERNAL LINK HANDLER
========================================== */

document.querySelectorAll("a[target='_blank']").forEach(function(link){

    link.setAttribute("rel", "noopener noreferrer");

});

/* ==========================================
   COPYRIGHT YEAR
========================================== */

const yearElement = document.getElementById("currentYear");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

/* ==========================================
   FINAL INITIALIZATION
========================================== */

console.log("==================================");
console.log("Shwe Sin Natural Products");
console.log("Website Version 5");
console.log("JavaScript Loaded Successfully");
console.log("==================================");

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", function () {

    document.body.classList.add("fade-in");

    console.log("Shwe Sin Natural Products Website Loaded Successfully.");

});
