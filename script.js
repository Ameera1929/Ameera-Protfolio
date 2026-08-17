const typed = new Typed(".multiple-text", {
    strings: ["AI and Data Science Student"],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuIcon.setAttribute(
            "aria-label",
            navbar.classList.contains("active") ? "Close menu" : "Open menu"
        );
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => navbar.classList.remove("active"));
    });
}

// Highlight the navigation item while scrolling.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            const active = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
            if (active) active.classList.add("active");
        }
    });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

// EmailJS contact form.
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_ikd98bs",
            "template_kqap7gl",
            this
        ).then(() => {
            alert("✅ Message Sent Successfully!");
            form.reset();
        }).catch(error => {
            console.error("EmailJS Error:", error);
            alert(error.text || "Unable to send the message. Please try again.");
        });
    });
}
