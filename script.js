/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

let currentSlide = 0;
let sliderTimer;


/* Create dots */

slides.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        goToSlide(index);

    });

    dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".dot");


function goToSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    restartSlider();

}


function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    goToSlide(next);

}


function prevSlide() {

    let prev = currentSlide - 1;

    if (prev < 0) {
        prev = slides.length - 1;
    }

    goToSlide(prev);

}


function restartSlider() {

    clearInterval(sliderTimer);

    sliderTimer = setInterval(nextSlide, 5000);

}


document.getElementById("nextBtn")
    .addEventListener("click", nextSlide);

document.getElementById("prevBtn")
    .addEventListener("click", prevSlide);

restartSlider();


/* =========================================
   FACILITY DATA
========================================= */

const facilities = {

    smartClass: {

        title: "Smart Class",

        images: [

            "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"

        ],

        video:
        "https://www.youtube.com/embed/7c3Z7QJ8M4w"

    },


    sports: {

        title: "Sports Activities",

        images: [

            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85"

        ],

        video:
        "https://www.youtube.com/embed/5RRS8Q3Y8bI"

    },


    computerLab: {

        title: "Computer Lab",

        images: [

            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"

        ],

        video:
        "https://www.youtube.com/embed/aircAruvnKk"

    },


    library: {

        title: "School Library",

        images: [

            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=85"

        ],

        video:
        ""

    }

};


/* =========================================
   OPEN FACILITY
========================================= */

function openFacility(type) {

    const data = facilities[type];

    const modal = document.getElementById("mediaModal");
    const title = document.getElementById("modalTitle");
    const gallery = document.getElementById("modalGallery");
    const video = document.getElementById("modalVideo");

    title.textContent = data.title;

    gallery.innerHTML = "";

    data.images.forEach(image => {

        const img = document.createElement("img");

        img.src = image;

        img.alt = data.title;

        img.addEventListener("click", () => {
            openImage(image);
        });

        gallery.appendChild(img);

    });


    video.innerHTML = "";

    if (data.video) {

        const heading = document.createElement("h3");

        heading.textContent = "Activity Video";

        heading.style.marginBottom = "12px";

        const iframe = document.createElement("iframe");

        iframe.src = data.video + "?rel=0";

        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

        iframe.allowFullscreen = true;

        video.appendChild(heading);
        video.appendChild(iframe);

    }


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE FACILITY MODAL
========================================= */

function closeModal() {

    document.getElementById("mediaModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   TEACHER DATA
========================================= */

const teachers = [

    {
        name: "Mrs. Priya Verma",
        subject: "Senior Teacher",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
        bio: "Dedicated to creating a supportive classroom environment where students can develop strong academic and communication skills."
    },

    {
        name: "Mrs. Anjali Singh",
        subject: "Mathematics Teacher",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=85",
        bio: "Uses activity-based and practical methods to make mathematics simple, interesting and enjoyable for students."
    },

    {
        name: "Mrs. Neha Gupta",
        subject: "Science Teacher",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85",
        bio: "Encourages students to learn science through observation, experiments, curiosity and real-life examples."
    },

    {
        name: "Mr. Amit Kumar",
        subject: "Computer Teacher",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
        bio: "Helps students build digital skills and understand technology through practical computer-based learning."
    }

];


/* =========================================
   OPEN TEACHER
========================================= */

function openTeacher(index) {

    const teacher = teachers[index];

    document.getElementById("teacherModalImage").src =
        teacher.image;

    document.getElementById("teacherModalName").textContent =
        teacher.name;

    document.getElementById("teacherModalSubject").textContent =
        teacher.subject;

    document.getElementById("teacherModalBio").textContent =
        teacher.bio;

    document.getElementById("teacherModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================
   SHOW ALL TEACHERS
========================================= */

function showAllTeachers() {

    alert(
        "More teacher profiles can be added here. " +
        "Just add their details to the teachers array in script.js."
    );

}


/* =========================================
   CLOSE TEACHER
========================================= */

function closeTeacherModal() {

    document.getElementById("teacherModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   PRINCIPAL
========================================= */

function openPrincipal() {

    document.getElementById("principalModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";

}


function closePrincipal() {

    document.getElementById("principalModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   IMAGE VIEWER
========================================= */

function openImage(src) {

    document.getElementById("fullImage").src = src;

    document.getElementById("imageViewer")
        .classList.add("show");

}


function closeImage() {

    document.getElementById("imageViewer")
        .classList.remove("show");

}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", function(e) {

        if (e.target === modal) {

            modal.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeModal();
        closeTeacherModal();
        closePrincipal();
        closeImage();

    }

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});