// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// Navigation burger menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
});

// Ambient Music Control
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i> Música Ambiente';
        } else {
            bgMusic.play().catch(error => {
                console.log("Audio playback failed:", error);
            });
            musicToggle.innerHTML = '<i class="fas fa-pause"></i> Pausar Música';
        }
        isMusicPlaying = !isMusicPlaying;
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you would typically send the form data to a server
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        contactForm.reset();
    });
}

// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements we want to animate
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.grid-item, .hero-content, h2, .video-container');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Enhanced Image Loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add page transition effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-transition');
});

// Smooth scroll with enhanced easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / 1000, 1);
                const easing = progress => (1 - Math.cos(progress * Math.PI)) / 2; // Smooth easing function
                
                window.scrollTo(0, startPosition + distance * easing(progress));

                if (timeElapsed < 1000) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }
    });
});

// Enhanced Navbar Animation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.backgroundColor = 'black';
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.backgroundColor = 'black';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'black)';
    } else {
        navbar.style.backgroundColor = 'black';
    }
});

// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'es', includedLanguages: 'en,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
        'google_translate_element'
    );
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero sections
function initializeParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }
}

// Image loading animations
function initializeImageLoading() {
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('loading');
        img.onload = () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
        };
    });
}

// Interactive image gallery
function createGallery() {
    const galleryItems = document.querySelectorAll('.grid-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <div class="modal-caption">${img.alt}</div>
                    <button class="modal-close">×</button>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.modal-close').addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
}

// Weather widget for beach pages
function addWeatherWidget() {
    if (window.location.pathname.includes('playas.html')) {
        const weatherWidget = document.createElement('div');
        weatherWidget.className = 'weather-widget';
        weatherWidget.innerHTML = `
            <div class="weather-content">
                <h3>Tiempo en Tenerife</h3>
                <div class="weather-info">
                    <span class="temperature">24°C</span>
                    <span class="conditions">Soleado</span>
                    <span class="wind">Viento: 12 km/h</span>
                    <span class="waves">Altura de olas: 0.5m</span>
                </div>
            </div>
        `;
        document.querySelector('.hero').appendChild(weatherWidget);
    }
}

// Restaurant filters
function initializeFilters() {
    if (window.location.pathname.includes('restaurantes.html')) {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        filterContainer.innerHTML = `
            <div class="filters">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="tradicional">Tradicional</button>
                <button class="filter-btn" data-filter="moderno">Moderno</button>
                <button class="filter-btn" data-filter="mariscos">Mariscos</button>
            </div>
        `;
        
        document.querySelector('.grid-section').insertBefore(filterContainer, document.querySelector('.grid-container'));
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        const restaurants = document.querySelectorAll('.grid-item');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                
                restaurants.forEach(restaurant => {
                    if (filter === 'all' || restaurant.dataset.category === filter) {
                        restaurant.style.display = 'block';
                    } else {
                        restaurant.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeParallax();
    initializeImageLoading();
    createGallery();
    addWeatherWidget();
    initializeFilters();
});