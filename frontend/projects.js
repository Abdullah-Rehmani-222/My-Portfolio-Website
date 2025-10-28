let loader = document.getElementById("loader")

window.addEventListener("load", () => {
  // Show loader immediately (optional)
  loader.style.display = "flex";
   document.getElementById("header").style.display = "none"
   document.getElementById("project").style.display = "none"
   // Hide loader after 4 seconds
   setTimeout(() => {
     loader.style.display = "none";
     document.getElementById("header").style.display = "flex"
     document.getElementById("project").style.display = "block"
  }, 2500);
});

// Logic for Navbar Menu to show in Mobile:
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
  document.getElementById("menuIcon").classList.toggle("active");
}

//Navabr link active logic for both computer and mobile layout:
let links = document.querySelectorAll("a");
console.log(links);
let lists= document.querySelectorAll("li");


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
