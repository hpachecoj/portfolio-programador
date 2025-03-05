document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("menu-ativo");
    menuToggle.classList.toggle("menu-ativo");
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navUl.contains(e.target)) {
      navUl.classList.remove("menu-ativo");
      menuToggle.classList.remove("menu-ativo");
    }
  });

  // Impede o fechamento ao clicar no próprio menu
  navUl.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});