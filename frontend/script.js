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

//Navabr link active logic for both computer and mobile layout:
let links = document.querySelectorAll("a");
console.log(links);


const savedPage = localStorage.getItem("activePage");

if (savedPage) {
  links.forEach((link) => {
    if (link.dataset.page === savedPage) {
      link.classList.add("active");
    }
  });
}

links.forEach((link) => {
 console.log("links:",link);
 
  link.addEventListener("click", (e) => {
    console.log("Clicked link:",e.target);
    
    links.forEach((item) => {
      item.classList.remove("active");
    });
   
    link.classList.add("active");
    // e.target.classList.add("active"); //above code work same like this code

    localStorage.setItem("activePage", link.dataset.page);
  });
});

  


