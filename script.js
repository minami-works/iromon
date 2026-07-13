const spMenuBtn = document.getElementById("spMenuBtn");
const globalNav = document.getElementById("globalNav");

spMenuBtn.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");
  spMenuBtn.setAttribute("aria-expanded", isOpen);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
});
document.querySelectorAll(".flavor__item").forEach(function (el) {
  observer.observe(el);
});
document.querySelectorAll(".campaign__monster--pc-only").forEach(function (el) {
  observer.observe(el);
});
