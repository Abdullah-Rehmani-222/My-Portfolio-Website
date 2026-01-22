// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

const cards = document.querySelectorAll(".project-card");

setTimeout(() => {
  cards.forEach((card) => {
    card.classList.remove("is-loading");
  });
}, 500);
