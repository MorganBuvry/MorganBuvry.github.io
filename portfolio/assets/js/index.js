/* Affichage de l'heure en temps réel */

function startTime() {
  const today = new Date();
  const hour = today.getHours();
  let minutes = today.getMinutes();
  minutes = checkTime(minutes);
  document.querySelector(
    ".nav-time"
  ).innerHTML = ` <p>${hour} h ${minutes}</p>`;

  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();

/* Menu click */
const menu = document.querySelector(".menu");
const menuSpan = document.querySelectorAll(".menu-link span");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuClose);
navOverlay.addEventListener("click", menuClose);

function menuOpen() {
  menu.style.transform = "translateY(0)";
  navOverlay.style.transform = "translateY(0)";
  menuSpan.forEach((span) => {
    span.style.transform = "translateY(0)";
  });
  nav.style.transform = "translate(0,150px)";
}

function menuClose() {
  menu.style.transform = "translateY(120%)";
  navOverlay.style.transform = "translateY(120%)";
  menuSpan.forEach((span) => {
    span.style.transform = "translateY(150%)";
  });
  nav.style.transform = "translate(0)";
}
