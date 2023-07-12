// Function to toggle a CSS class on an element
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Function to handle click events on the navigation menu
function handleMenuClick(event) {
  event.preventDefault();
  var target = event.target;
  
  if (target.tagName === 'A' && target.classList.contains('menu-link')) {
    var menu = target.closest('.menu');
    var links = menu.querySelectorAll('.menu-link');
    
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    
    target.classList.add('active');
  }
}

// Function to initialize the script
function init() {
  var menu = document.querySelector('.menu');
  menu.addEventListener('click', handleMenuClick);
}

// Initialize the script when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
