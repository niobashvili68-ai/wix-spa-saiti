document.addEventListener("DOMContentLoaded", () => {
    
   
    const mobileBurger = document.getElementById("mobileBurger");
    const navLinksWrapper = document.querySelector(".nav-links-wrapper");

    if (mobileBurger && navLinksWrapper) {
        mobileBurger.addEventListener("click", () => {
            navLinksWrapper.classList.toggle("active-mobile-toggle");
        });
    }


    const contactForm = document.getElementById("wixContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for reaching out! Your message has been routed to the Serenity registry desk.");
            contactForm.reset();
        });
    }


    const modalForm = document.getElementById("modalFormSubmit");
    if (modalForm) {
        modalForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Reservation pending verification! Check your inbound inbox workspace folders for appointment credentials shortly.");
            closeBookingModal();
        });
    }
});


let currentTestimonialIndex = 0;
function switchTestimonial(index) {
    const slides = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");
    
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active-slide"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    currentTestimonialIndex = index;
    slides[currentTestimonialIndex].classList.add("active-slide");
    dots[currentTestimonialIndex].classList.add("active-dot");
}


function filterServices(category) {
    const tabs = document.querySelectorAll(".filter-tab");
    const rows = document.querySelectorAll(".treatment-item-row");

    tabs.forEach(tab => {
        tab.classList.remove("active-filter");
        if (tab.innerText.toLowerCase().includes(category) || (category === 'all' && tab.innerText === 'All Services')) {
            tab.classList.add("active-filter");
        }
    });

    rows.forEach(row => {
        if (category === "all" || row.getAttribute("data-category") === category) {
            row.style.display = "grid";
        } else {
            row.style.display = "none";
        }
    });
}


function openBookingModal(serviceName) {
    const modal = document.getElementById("bookingModal");
    const modalTitle = document.getElementById("modalServiceTitle");
    if (modal && modalTitle) {
        modalTitle.innerText = `Book ${serviceName}`;
        modal.style.display = "flex";
    }
}

function closeBookingModal() {
    const modal = document.getElementById("bookingModal");
    if (modal) modal.style.display = "none";
}
let totalCartItems = 0;
function incrementCartCounter() {
    totalCartItems++;
    const counters = document.querySelectorAll(".cart-counter");
    counters.forEach(counter => {
        counter.innerText = totalCartItems;
    });
}
