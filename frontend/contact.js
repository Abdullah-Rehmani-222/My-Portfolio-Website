// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}


// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const contactContent = document.querySelector(".contact-content ");
contactContent.style.opacity = 0;

const contactForm = document.querySelector(".contact-form");
contactForm.style.opacity = 0;

const info_01 = document.querySelector("#info-1");
info_01.style.opacity = 0;

const info_02 = document.querySelector("#info-2");
info_02.style.opacity = 0;


if (info_01.clientWidth && info_02.clientWidth && contactForm.clientWidth === 330) {
  contactForm.style.transform = "translateX(-10px)";
  info_01.style.transform = "translateX(20px)";
  info_02.style.transform = "translateX(20px)";
  contactContent.style.transform = "translateY(-40px)";
}else {
  contactForm.style.transform = "translateX(-40px)";
  info_01.style.transform = "translateX(40px)";
  info_02.style.transform = "translateX(40px)"; 
  contactContent.style.transform = "translateY(-40px)";
}
window.addEventListener("load", () => {
  contactContent.style.transition = "transform 0.8s ease";
  contactContent.style.opacity = 1;
  contactContent.style.transform = "translateY(-0px)";
  
  contactForm.style.transition = "transform 0.8s ease 0.2s";
  contactForm.style.opacity = 1;
  contactForm.style.transform = "translateX(-0px)";

  info_01.style.transition = "transform 0.8s ease 0.3s";
  info_01.style.opacity = 1;
  info_01.style.transform = "translateX(-0px)";

  info_02.style.transition = "transform 0.8s ease 0.4s";
  info_02.style.opacity = 1;
  info_02.style.transform = "translateX(-0px)";
});


