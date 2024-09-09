// Smooth Scrolling
const links = document.querySelectorAll('a[href*="#"]:not([href="#"])'); 

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    targetElement.scrollIntoView({
      behavior: 'smooth' 
    });
  });
});