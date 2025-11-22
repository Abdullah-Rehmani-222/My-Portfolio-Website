// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const aboutContent = document.querySelector(".about-content");
aboutContent.style.opacity = 0;
aboutContent.style.transform = "translateY(60px)";

const about_01 = document.querySelector("#about-1");
about_01.style.opacity = 0;
about_01.style.transform = "translateY(60px)";

const about_02 = document.querySelector("#about-2");
about_02.style.opacity = 0;
about_02.style.transform = "translateY(60px)";

window.addEventListener("load", () => {
  aboutContent.style.transition = "transform 0.8s ease";
  aboutContent.style.opacity = 1;
  aboutContent.style.transform = "translateY(-1px)";

  about_01.style.transition = "transform 0.8s ease 0.2s";
  about_01.style.opacity = 1;
  about_01.style.transform = "translateY(-1px)";

  about_02.style.transition = "transform 0.8s ease 0.3s";
  about_02.style.opacity = 1;
  about_02.style.transform = "translateY(-1px)";
});
