// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const servicesContent = document.querySelector(".services-content");
servicesContent.style.opacity = 0;
servicesContent.style.transform = "translateY(-40px)";

const servicesContent_02 = document.querySelector(".services-content-02");
servicesContent_02.style.opacity = 0;
servicesContent_02.style.transform = "translateY(40px)";

const firstCard = document.querySelector("#first-card");
firstCard.style.opacity = 0;
firstCard.style.transform = "translateY(40px)";

const secondCard = document.querySelector("#second-card");
secondCard.style.opacity = 0;
secondCard.style.transform = "translateY(40px)";

const card_01 = document.querySelector("#card-1");
card_01.style.opacity = 0;
card_01.style.transform = "translateY(40px)";

const card_02 = document.querySelector("#card-2");
card_02.style.opacity = 0;
card_02.style.transform = "translateY(40px)";

const card_03 = document.querySelector("#card-3");
card_03.style.opacity = 0;
card_03.style.transform = "translateY(40px)";

const card_04 = document.querySelector("#card-4");
card_04.style.opacity = 0;
card_04.style.transform = "translateY(40px)";

window.addEventListener("load", () => {
  servicesContent.style.transition = "transform 0.8s ease";
  servicesContent.style.opacity = 1;
  servicesContent.style.transform = "translateY(-0px)";

  servicesContent_02.style.transition = "transform 0.8s ease";
  servicesContent_02.style.opacity = 1;
  servicesContent_02.style.transform = "translateY(-0px)";

  firstCard.style.transition = "transform 0.8s ease 0.1s";
  firstCard.style.opacity = 1;
  firstCard.style.transform = "translateY(-0px)";

  secondCard.style.transition = "transform 0.8s ease 0.2s";
  secondCard.style.opacity = 1;
  secondCard.style.transform = "translateY(-0px)";


  card_01.style.transition = "transform 0.8s ease 0.1s";
  card_01.style.opacity = 1;
  card_01.style.transform = "translateY(-0px)";
  
  card_02.style.transition = "transform 0.8s ease 0.2s";
  card_02.style.opacity = 1;
  card_02.style.transform = "translateY(-0px)";

  card_03.style.transition = "transform 0.8s ease 0.3s";
  card_03.style.opacity = 1;
  card_03.style.transform = "translateY(-0px)";
  
  card_04.style.transition = "transform 0.8s ease 0.4s";
  card_04.style.opacity = 1;
  card_04.style.transform = "translateY(-0px)";
});
