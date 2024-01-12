const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu"); 
 
 hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

 });

 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*
document.addEventListener('DOMContentLoaded',
 function () {
  
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    const mobileMenu = document.querySelector
    ('.mobile-menu');

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a'); 

    const closeBtn = document.querySelector
    ('.close-toggle');

    function toggleMobileMenu () {
      mobileMenu.classList.toggle('open');
    }

    mobileMenuToggle.addEventListener('click' , 
    toggleMobileMenu);

    closeBtn.addEventListener('click' , function () {
      mobileMenu.classList.remove('open');
    });

    // close the menu when a link is clicked //
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', 
        toggleMobileMenu);

    });
    
});  */ 
 