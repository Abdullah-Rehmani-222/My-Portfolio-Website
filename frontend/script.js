
// Logic for Dynamic Typing:
const words = ["Web Developer.", "Web Designer.", "Freelancer."];
const dynamicText = document.getElementById("typing-text");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let deletingSpeed = 60;
let pauseBetweenWords = 1500;

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    dynamicText.textContent = currentWord.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseBetweenWords);
      return;
    }
  } else {
    dynamicText.textContent = currentWord.slice(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();

// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const homeContent = document.querySelector(".content");
homeContent.style.opacity = 0;
homeContent.style.transform = "translateY(60px)";

const contentImage = document.querySelector(".content-image");
contentImage.style.opacity = 0;
contentImage.style.transform = "translateY(60px)";

window.addEventListener("load", () => {
  homeContent.style.transition = "transform 0.8s ease";
  homeContent.style.opacity = 1;
  homeContent.style.transform = "translateY(-1px)";

  contentImage.style.transition = "transform 0.8s ease 0.1s";
  contentImage.style.opacity = 1;
  contentImage.style.transform = "translateY(-1px)";
});
