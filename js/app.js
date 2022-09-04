const menuControl1 = document.querySelector(".menu__control");
const menuControl2 = document.querySelector(".menu__control-2");
const menuMobile = document.querySelector(".hero__nav--mobile");
const toogleClassMenu = () => {
  menuMobile.classList.toggle("visible");
  console.log("click");
};
menuControl1.addEventListener("click", toogleClassMenu);
menuControl2.addEventListener("click", toogleClassMenu);
