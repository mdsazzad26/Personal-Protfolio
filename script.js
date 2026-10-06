/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* Skills */

const skills = [
    {
        name: "HTML5",
        icon: "🌐",
        level: 95
    },
    {
        name: "CSS3",
        icon: "🎨",
        level: 90
    },
    {
        name: "Tailwind CSS",
        icon: "💨",
        level: 90
    },
    {
        name: "JavaScript",
        icon: "⚡",
        level: 80
    },
    {
        name: "React",
        icon: "⚛️",
        level: 70
    },
    {
        name: "Node.js",
        icon: "🟢",
        level: 65
    },
    {
        name: "Git & GitHub",
        icon: "🔧",
        level: 85
    },
    {
        name: "Netlify",
        icon: "🚀",
        level: 80
    }
];


const skillsContainer =
    document.getElementById("skillsContainer");


skills.forEach(skill => {

    const card = document.createElement("div");

    card.className = "skill-card reveal";

    card.innerHTML = `

        <div class="skill-icon">
            ${skill.icon}
        </div>

        <h3>
            ${skill.name}
        </h3>

        <div class="skill-bar">

            <div
                class="skill-progress"
                style="width: ${skill.level}%"
            ></div>

        </div>

    `;

    skillsContainer.appendChild(card);

});


/* =========================================
   PROJECTS
========================================= */

const projects = [

    {
        title: "Personal Portfolio",
        description:
            "A modern responsive portfolio website.",
        category: "frontend",
        icon: "💼",
        tags: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Tailwind Landing Page",
        description:
            "A beautiful landing page built with Tailwind CSS.",
        category: "tailwind",
        icon: "🎨",
        tags: ["Tailwind", "HTML"]
    },

    {
        title: "Login Page",
        description:
            "Responsive modern login page design.",
        category: "frontend",
        icon: "🔐",
        tags: ["HTML", "CSS"]
    },

    {
        title: "Shopping Cart",
        description:
            "Dynamic shopping cart using JavaScript.",
        category: "javascript",
        icon: "🛒",
        tags: ["JavaScript", "CSS"]
    },

    {
        title: "Developer Dashboard",
        description:
            "Interactive dashboard UI for developers.",
        category: "javascript",
        icon: "📊",
        tags: ["JavaScript", "HTML"]
    },

    {
        title: "Agency Website",
        description:
            "Responsive website for a creative agency.",
        category: "tailwind",
        icon: "🚀",
        tags: ["Tailwind", "HTML"]
    }

];


const projectsContainer =
    document.getElementById("projectsContainer");


function renderProjects(filter = "all") {

    projectsContainer.innerHTML = "";

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                project => project.category === filter
            );


    filteredProjects.forEach(project => {

        const card =
            document.createElement("div");

        card.className =
            "project-card reveal";


        card.innerHTML = `

            <div class="project-image">
                ${project.icon}
            </div>

            <div class="project-info">

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tags">

                    ${project.tags.map(tag => `
                        <span>${tag}</span>
                    `).join("")}

                </div>

            </div>

        `;


        projectsContainer.appendChild(card);

    });


    activateReveal();
}


renderProjects();


/* Project Filter */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        renderProjects(filter);

    });

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");


const words = [
    "beautiful websites.",
    "responsive interfaces.",
    "dynamic experiences.",
    "modern solutions."
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "🌙";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );


    themeToggle.textContent =
        isLight ? "🌙" : "☀️";

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");


const nav =
    document.getElementById("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });


/* =========================================
   SCROLL REVEAL
========================================= */

function activateReveal() {

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}


activateReveal();


/* =========================================
   SCROLL PROGRESS
========================================= */

const scrollProgress =
    document.getElementById("scrollProgress");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    const progress =
        (scrollTop / documentHeight) * 100;


    scrollProgress.style.width =
        progress + "%";

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


const toast =
    document.getElementById("toast");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    toast.classList.add("show");


    contactForm.reset();


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();