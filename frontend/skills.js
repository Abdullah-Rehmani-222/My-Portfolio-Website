// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Logic for navigating skills sections:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.
const button01 = document.querySelector("#btn-1");
const button02 = document.querySelector("#btn-2");
const button03 = document.querySelector("#btn-3");

const frontend = document.querySelector(".frontend-skills");
const tools = document.querySelector(".tools-and-services");
const ai = document.querySelector(".ai-integration");

button01.classList.add("button");
button02.classList.add("button");
button03.classList.add("button");

button01.classList.add("active");
button01.addEventListener("click", () => {
  frontend.style.display = "flex";
  tools.style.display = "none";
  ai.style.display = "none";
  button01.classList.add("active");
  button02.classList.remove("active");
  button03.classList.remove("active");
});

button02.addEventListener("click", () => {
  frontend.style.display = "none";
  tools.style.display = "flex";
  ai.style.display = "none";
  button02.classList.add("active");
  button01.classList.remove("active");
  button03.classList.remove("active");
});

button03.addEventListener("click", () => {
  frontend.style.display = "none";
  tools.style.display = "none";
  ai.style.display = "flex";
  button03.classList.add("active");
  button01.classList.remove("active");
  button02.classList.remove("active");
});

// end of navigating skills sections.


