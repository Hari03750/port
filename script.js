// Toggle light/dark mode
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

// Scroll-based animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section, .project-card, .card, .contact-card").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
