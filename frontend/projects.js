
// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}


// Animation:
//? These all below is my logic not single help I got from google, chatgpt. Only I written all these logics myself.

const projectContent = document.querySelector(".project-content ");
projectContent.style.opacity = 0;
projectContent.style.transform = "translateY(60px)";

const projectLayout = document.querySelector(".project-layout ");
projectLayout.style.opacity = 0;
projectLayout.style.transform = "translateY(60px)";

window.addEventListener("load", () => {
  projectContent.style.transition = "transform 0.8s ease";
  projectContent.style.opacity = 1;
  projectContent.style.transform = "translateY(-1px)";

  projectLayout.style.transition = "transform 0.8s ease 0.2s";
  projectLayout.style.opacity = 1;
  projectLayout.style.transform = "translateY(-1px)";
});
