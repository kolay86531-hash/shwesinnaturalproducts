// ===================================
// SHWE SIN NATURAL PRODUCTS
// Version 3 Script
// ===================================

// Navbar Shadow
window.addEventListener("scroll", function () {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "#084f2b";
        nav.style.transition = "0.3s";

    } else {

        nav.style.background = "#0b6b3a";

    }

});

// Welcome Message
window.addEventListener("load", function () {

    console.log("Welcome To Shwe Sin Natural Products");

});

// Smooth Button Animation
const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0b6b3a";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Footer Year
const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

copy.innerHTML =
"© " + year + " Shwe Sin Natural Products. All Rights Reserved.";

}
