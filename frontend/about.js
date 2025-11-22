// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const aboutContent = document.querySelector(".about-content");
aboutContent.style.opacity = 0;

const about_01 = document.querySelector("#about-1");
about_01.style.opacity = 0;

const about_02 = document.querySelector("#about-2");
about_02.style.opacity = 0;

const about_03 = document.querySelector("#about-3");
about_03.style.opacity = 0;



if (about_01.clientWidth && about_02.clientWidth && about_03.clientWidth === 298) {
  aboutContent.style.transform = "translateY(-40px)";
  about_01.style.transform = "translateX(-20px)";
  about_02.style.transform = "translateX(20px)";
  about_03.style.transform = "translateX(-20px)";
} else {
  aboutContent.style.transform = "translateY(-40px)";
  about_01.style.transform = "translateY(40px)";
  about_02.style.transform = "translateY(40px)";
  about_03.style.transform = "translateY(40px)";
}

window.addEventListener("load", () => {
  aboutContent.style.transition = "transform 0.8s ease";
  aboutContent.style.opacity = 1;
  aboutContent.style.transform = "translateY(-0px)";

  about_01.style.transition = "transform 0.8s ease 0.2s";
  about_01.style.opacity = 1;
  about_01.style.transform = "translateY(-0px)";

  about_02.style.transition = "transform 0.8s ease 0.3s";
  about_02.style.opacity = 1;
  about_02.style.transform = "translateY(-0px)";

  about_03.style.transition = "transform 0.8s ease 0.4s";
  about_03.style.opacity = 1;
  about_03.style.transform = "translateY(-0px)";
});
