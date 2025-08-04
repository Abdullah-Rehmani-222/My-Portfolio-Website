
// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

// Set 'active' class based on current page URL
const links = document.querySelectorAll("a[data-page]");
const currentPath = window.location.pathname;

links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    
    if (linkPath === currentPath) {
        link.classList.add("active");
        localStorage.setItem("activePage", link.dataset.page); // Optional: update stored page
    } else {
        link.classList.remove("active");
    }
    
    // On click, store new active page
    link.addEventListener("click", () => {
        localStorage.setItem("activePage", link.dataset.page);
    });
});

//! Note: Here below we write logic of form handling:
