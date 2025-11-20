// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Tab switching functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Found nav links:', navLinks.length);
    console.log('Found tab contents:', tabContents.length);

    function switchTab(tabName) {
        console.log('Switching to tab:', tabName);

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
            console.log('Hiding:', content.id);
        });

        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show selected tab content
        const selectedTab = document.getElementById(tabName + '-content');
        console.log('Selected tab element:', selectedTab);
        if (selectedTab) {
            selectedTab.classList.add('active');
            console.log('Showing:', selectedTab.id);
        } else {
            console.error('Could not find tab:', tabName + '-content');
        }

        // Add active class to clicked nav link
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            if (tabName) {
                switchTab(tabName);
            }
        });
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    function showSlide(n) {
        if (n >= slides.length) currentSlide = 0;
        if (n < 0) currentSlide = slides.length - 1;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide--;
            showSlide(currentSlide);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide++;
            showSlide(currentSlide);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 5000);

    // Sticky header on scroll
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});

// Accordion Toggle Function
function toggleAccordion(header) {
    const content = header.nextElementSibling;

    header.classList.toggle('active');
    content.classList.toggle('active');
}

// Photo Gallery Modal Functions
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');

    const img = element.querySelector('img');
    const overlay = element.querySelector('.photo-overlay');

    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.innerHTML = overlay.textContent;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Floorplan Modal Functions
function openFloorplanModal(src, title) {
    const modal = document.getElementById('floorplanModal');
    const modalImg = document.getElementById('floorplanModalImage');
    const caption = document.getElementById('floorplanModalCaption');

    modal.style.display = 'block';
    modalImg.src = src;
    caption.innerHTML = title;
}

function closeFloorplanModal() {
    document.getElementById('floorplanModal').style.display = 'none';
}

// Close modals when clicking outside the image
window.onclick = function(event) {
    const imageModal = document.getElementById('imageModal');
    const floorplanModal = document.getElementById('floorplanModal');

    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
    if (event.target == floorplanModal) {
        floorplanModal.style.display = 'none';
    }
}

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeFloorplanModal();
    }
});
