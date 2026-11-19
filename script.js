// JSが動いている時だけフェードイン用に隠す（失敗時はそのまま表示される）
document.documentElement.classList.add("js-anim");

const spMenuBtn = document.getElementById("spMenuBtn");
const globalNav = document.getElementById("globalNav");

// メニューの開閉を1か所にまとめる
function setMenu(isOpen) {
  globalNav.classList.toggle("is-open", isOpen);
  spMenuBtn.setAttribute("aria-expanded", isOpen);
  document.documentElement.classList.toggle("is-menu-open", isOpen);
}

spMenuBtn.addEventListener("click", () => {
  setMenu(!globalNav.classList.contains("is-open"));
});

// メニュー内のリンクを押したら閉じる
globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Escキーでも閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// スクロールで表示。一度表示したら監視をやめる
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".flavor__item, .campaign__monster--pc-only")
  .forEach((el) => observer.observe(el));
