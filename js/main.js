// Portfolio - Main JavaScript

// ========================================
// Theme Switcher (Light/Dark Mode)
// ========================================

const ThemeSwitcher = {
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Priority: saved preference > system preference > light
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (prefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }

        // Event listener for toggle button
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    },

    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
};

// ========================================
// Language Switching
// ========================================

const LanguageSwitcher = {
    currentLang: 'cs',

    init() {
        const browserLang = navigator.language || navigator.userLanguage;
        const savedLang = localStorage.getItem('portfolio-lang');

        if (savedLang) {
            this.currentLang = savedLang;
        } else if (!browserLang.toLowerCase().startsWith('cs')) {
            this.currentLang = 'en';
        }

        this.applyLanguage(this.currentLang);
        this.updateToggleButton();

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
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-cs][data-en]');
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });

        const placeholderElements = document.querySelectorAll('[data-cs-placeholder][data-en-placeholder]');
        placeholderElements.forEach(el => {
            const placeholder = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
        });
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
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
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
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Honeypot check - pokud je vyplněno, je to bot
        const honeypot = this.querySelector('input[name="_gotcha"]');
        if (honeypot && honeypot.value) {
            // Předstíráme úspěch, ale neposíláme
            const fakeMsg = LanguageSwitcher.currentLang === 'cs'
                ? 'Děkuji za zprávu! Ozvu se vám co nejdříve.'
                : 'Thank you for your message! I will get back to you soon.';
            alert(fakeMsg);
            this.reset();
            return;
        }

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = LanguageSwitcher.currentLang === 'cs' ? 'Odesílám...' : 'Sending...';

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const message = LanguageSwitcher.currentLang === 'cs'
                    ? 'Děkuji za zprávu! Ozvu se vám co nejdříve.'
                    : 'Thank you for your message! I will get back to you soon.';
                alert(message);
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            const errorMsg = LanguageSwitcher.currentLang === 'cs'
                ? 'Omlouvám se, něco se pokazilo. Zkuste to prosím znovu.'
                : 'Sorry, something went wrong. Please try again.';
            alert(errorMsg);
        }

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
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

document.querySelectorAll('section, .project-card, .skill-card, .hobby-item, .timeline-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Navbar Scroll Effect
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
// Parallax Effect
// ========================================

const parallaxSections = document.querySelectorAll('.parallax-section');

function updateParallax() {
    parallaxSections.forEach(section => {
        const scrolled = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
            const yPos = (scrolled - sectionTop) * 0.3;
            section.style.backgroundPositionY = `${yPos}px`;
        }
    });
}

window.addEventListener('scroll', updateParallax);

// ========================================
// Active Navigation Link
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    ThemeSwitcher.init();
    LanguageSwitcher.init();
    updateActiveNav();
});
