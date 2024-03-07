const menu_btn = document.querySelector(".menu_btn");
const mobile_menu = document.querySelector(".mobile_menu");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  mobile_menu.classList.toggle("show");
});
