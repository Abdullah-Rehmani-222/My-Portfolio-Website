// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}


// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const contactContent = document.querySelector(".contact-content ");
contactContent.style.opacity = 0;
contactContent.style.transform = "translateY(60px)";

const contactForm = document.querySelector(".contact-form");
contactForm.style.opacity = 0;
contactForm.style.transform = "translateY(60px)";

window.addEventListener("load", () => {
  contactContent.style.transition = "transform 0.8s ease";
  contactContent.style.opacity = 1;
  contactContent.style.transform = "translateY(-2px)";
  
  contactForm.style.transition = "transform 0.8s ease 0.2s";
  contactForm.style.opacity = 1;
  contactForm.style.transform = "translateY(-2px)";
});