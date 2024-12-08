const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
const slider = document.getElementById("mainSlider");
let currentSlide = 0;
const slides = slider.querySelectorAll(".slide");

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000);

// FAQ Interaction
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.closest(".faq-item");
    faqItem.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 300);
  });
});
document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.addEventListener("click", () => {
    alert("Vous avez cliqué sur une image du portfolio!");
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message! Nous vous répondrons bientôt.");
  });