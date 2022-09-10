const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link");



const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) skillsCounter();
    if (!mlPlayed) mlCounter();
});

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

/* ----------Sticky Navbar---------- */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* ----------Reveal Animation---------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* ----------Portfolio Filter Animation---------- */

let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },
});

/* ----------Modal Pop Up Animation---------- */

let currentIndex = 0;

zoom_icons.forEach((icn, i) =>
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        changeImage(currentIndex);
    })
);

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = 5;
    } else {
        currentIndex--;
    }
    changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
    if (currentIndex === 5) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeImage(currentIndex);
});

function changeImage(index) {
    images.forEach((img) => img.classList.remove("showImage"));
    images[index].classList.add("showImage");
}

/* ----------Open and Close Navbar Menu---------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) =>
    link.addEventListener("click", () => {
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
    })
);
