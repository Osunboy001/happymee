const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navCenter = document.querySelector('.nav-center');

mobileMenuToggle.addEventListener('click', function() {
    navCenter.classList.toggle('active');
});


// Get Started button functionality
const getStartedBtn = document.getElementById('getStartedBtn');
const heroSearchInput = document.getElementById('heroSearchInput');

getStartedBtn.addEventListener('click', function() {
    // Scroll to categories section or redirect
    // For now, let's focus the search input
    heroSearchInput.focus();
    
    // OR redirect to funnyme page:
    // window.location.href = 'funnyme.html';
});

// Allow Enter key in search
heroSearchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm) {
            window.location.href = `funnyme.html?search=${searchTerm}`;
        }
    }
});