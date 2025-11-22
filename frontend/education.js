// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const educationContent = document.querySelector(".education-content ");
educationContent.style.opacity = 0;
educationContent.style.transform = "translateY(60px)";

const educationLayout = document.querySelector(".education-layout");
educationLayout.style.opacity = 0;
educationLayout.style.transform = "translateY(60px)";

window.addEventListener("load", () => {
  educationContent.style.transition = "transform 0.8s ease";
  educationContent.style.opacity = 1;
  educationContent.style.transform = "translateY(-2px)";

  educationLayout.style.transition = "transform 0.8s ease 0.2s";
  educationLayout.style.opacity = 1;
  educationLayout.style.transform = "translateY(-2px)";
});
