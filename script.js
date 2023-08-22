// Function to toggle a CSS class on an element
function toggleClass(element, className) {
  element.classList.toggle(className); // Use toggle to simplify the code
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

// Initialize the script
function init() {
  var menu = document.querySelector('.menu');
  menu.addEventListener('click', handleMenuClick);
}

// Initialize the script when the DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Smooth scroll to a target element
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

// Function to handle scrolling animation for cards
function moveCardsOnScroll() {
  const cards = document.querySelectorAll('.product');
  
  cards.forEach(product => {
    const scrollPosition = window.scrollY;
    const cardPosition = product.offsetTop;
    const distanceFromTop = cardPosition - scrollPosition;
    const cardMovement = distanceFromTop * 0.3; // Adjust the speed of movement (0.3 is just an example)
    
    product.style.transform = `translateX(${cardMovement}px)`;
  });
}

// Add a debounce function to optimize scroll performance
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Initialize the scroll animation when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  moveCardsOnScroll(); // Initial animation
  
  // Use debounce to improve performance by limiting the scroll event calls
  const debouncedMoveCards = debounce(moveCardsOnScroll, 10);
  window.addEventListener('scroll', debouncedMoveCards);
});
