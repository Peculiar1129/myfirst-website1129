//20240619更新版本

// Function to verify age
function verifyAge(isOfAge) {
    if (isOfAge) {
        document.getElementById('age-verification').style.display = 'none';
    } else {
        alert("You must be 18 years or older to enter this site.");
        window.location.href = "https://www.google.com";
    }
}

// Show age verification on page load
window.onload = function() {
    document.getElementById('age-verification').style.display = 'flex';
};

// Back to top button functionality
var backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) { // Show button when scrolled 200px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }

    var footer = document.querySelector('footer');
    var footerRect = footer.getBoundingClientRect();
    var buttonRect = backToTopButton.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (footerRect.top < windowHeight) { // Adjust button position when footer is visible
        backToTopButton.style.bottom = (windowHeight - footerRect.top + 20) + 'px';
    } else {
        backToTopButton.style.bottom = '20px';
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle hamburger menu
const menuButton = document.getElementById('menuButton');
const horizontalMenu = document.querySelector('.horizontal-menu');

menuButton.addEventListener('click', () => {
  horizontalMenu.classList.toggle('hidden');
});

// Function to toggle dropdown menu in mobile view
function toggleMenu(x) {
    x.classList.toggle("open");
    document.querySelector(".dropdown-menu").classList.toggle("open");
}
