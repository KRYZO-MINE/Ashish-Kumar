// Initialize Lucide Icons after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    type();
    reveal();
    initHomeAnimation();
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-shadow');
    } else {
        navbar.classList.remove('navbar-shadow');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.style.transform = 'translateY(0)';
    }, 10);
});

closeBtn.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
});

// Scroll to Section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        const offset = 110;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // Close mobile menu if open
    if (mobileMenu) {
        mobileMenu.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, button, a, .skill-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '80px';
            cursor.style.height = '80px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '32px';
            cursor.style.height = '32px';
        });
    });
}

// Typewriter Animation
const typewriterText = "I am Ashish Kumar";
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function type() {
    if (!typewriterElement) return;
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            typewriterElement.innerHTML = "";
            i = 0;
            type();
        }, 2000);
    }
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Home Animation Initial
function initHomeAnimation() {
    const homeLeft = document.getElementById('home-left');
    const homeRight = document.getElementById('home-right');
    if (homeLeft && homeRight) {
        homeLeft.style.opacity = '1';
        homeLeft.style.transform = 'translateX(0)';
        homeRight.style.opacity = '1';
        homeRight.style.transform = 'translateX(0)';
    }
}
