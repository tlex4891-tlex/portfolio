// Portfolio - Main JavaScript

// ========================================
// Language Switching
// ========================================

const LanguageSwitcher = {
    currentLang: 'cs',

    init() {
        // Detekce jazyka prohlížeče
        const browserLang = navigator.language || navigator.userLanguage;
        const savedLang = localStorage.getItem('portfolio-lang');

        // Priorita: 1. Uložená preference, 2. Jazyk prohlížeče, 3. Výchozí CS
        if (savedLang) {
            this.currentLang = savedLang;
        } else if (!browserLang.toLowerCase().startsWith('cs')) {
            // Pokud jazyk prohlížeče není čeština, použij angličtinu
            this.currentLang = 'en';
        }

        // Aplikuj jazyk
        this.applyLanguage(this.currentLang);
        this.updateToggleButton();

        // Event listener pro přepínač
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    toggle() {
        this.currentLang = this.currentLang === 'cs' ? 'en' : 'cs';
        localStorage.setItem('portfolio-lang', this.currentLang);
        this.applyLanguage(this.currentLang);
        this.updateToggleButton();
    },

    applyLanguage(lang) {
        // Aktualizuj HTML lang atribut
        document.documentElement.lang = lang;

        // Aktualizuj všechny elementy s data-cs a data-en atributy
        const elements = document.querySelectorAll('[data-cs][data-en]');
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });

        // Aktualizuj placeholdery ve formulářích
        const placeholderElements = document.querySelectorAll('[data-cs-placeholder][data-en-placeholder]');
        placeholderElements.forEach(el => {
            const placeholder = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
        });

        // Aktualizuj title stránky
        if (lang === 'en') {
            document.title = 'Tomáš Alex | Business Consultant & Project Manager';
        } else {
            document.title = 'Tomáš Alex | Business Consultant & Project Manager';
        }
    },

    updateToggleButton() {
        const currentSpan = document.querySelector('.lang-current');
        if (currentSpan) {
            currentSpan.textContent = this.currentLang.toUpperCase();
        }

        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.title = this.currentLang === 'cs' ? 'Switch to English' : 'Přepnout do češtiny';
        }
    }
};

// ========================================
// Smooth Scroll
// ========================================

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

// ========================================
// Contact Form
// ========================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = LanguageSwitcher.currentLang === 'cs'
            ? 'Formulář odeslán! (Demo)'
            : 'Form submitted! (Demo)';
        alert(message);
        this.reset();
    });
}

// ========================================
// Scroll Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// ========================================
// Navbar Background on Scroll
// ========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    LanguageSwitcher.init();
});
