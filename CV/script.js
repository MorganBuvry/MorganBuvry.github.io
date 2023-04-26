// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});

// TYPED
let typed = new Typed(".typed", {
  strings: [
    "Bonjour à toutes et à tous, je me présente, je m'appelle Morgan Buvry.",
    "Après sept années à travailler en usine agroalimentaire, j'ai décidé de me lancer à fond dans l'apprentissage du code. <br> Voilà maintenant plusieurs mois que j'apprends le code en autodidacte et que je me forme aux langages Front tels que HTML, CSS et Javascript. <br> Je recherche maintenant une entreprise qui m'accompagnera dans mon projet de reconversion pour devenir développeur web.",
  ],
  typeSpeed: 40,
  backSpeed: 20,
});
