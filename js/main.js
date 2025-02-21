// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Gallery Images
const galleryImages = [
    {
        src: 'images/gallery/1.jpeg',
        alt: 'Pergola Design 1'
    },
    {
        src: 'images/gallery/2.jpeg',
        alt: 'Pergola Design 2'
    },
    {
        src: 'images/gallery/3.jpeg',
        alt: 'Pergola Design 3'
    },
    {
        src: 'images/gallery/4.jpeg',
        alt: 'Pergola Design 4'
    },
    {
        src: 'images/gallery/5.jpeg',
        alt: 'Pergola Design 5'
    },
    {
        src: 'images/gallery/6.jpeg',
        alt: 'Pergola Design 6'
    },
    {
        src: 'images/gallery/7.jpeg',
        alt: 'Pergola Design 7'
    },
    {
        src: 'images/gallery/8.jpeg',
        alt: 'Pergola Design 8'
    },
    {
        src: 'images/gallery/9.jpeg',
        alt: 'Pergola Design 9'
    },
    {
        src: 'images/gallery/10.jpeg',
        alt: 'Pergola Design 10'
    }
];

// Function to load gallery images
function loadGalleryImages() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}

// Load gallery images when the DOM is ready
document.addEventListener('DOMContentLoaded', loadGalleryImages);

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .gallery-item, .about-content, .contact-container');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 