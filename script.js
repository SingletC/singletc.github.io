const menuButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-header]");

function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  navLinks?.classList.toggle("is-open", open);
}

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

document.querySelector("[data-year]").textContent = String(new Date().getFullYear());
