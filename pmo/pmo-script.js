// PMO Prezentace - JavaScript

// ========================================
// Theme Switcher (Light/Dark Mode)
// ========================================

const ThemeSwitcher = {
    init() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (prefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }

        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }

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

        // Update text content
        const elements = document.querySelectorAll('[data-cs][data-en]');
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                // Check if it contains HTML (for hero name with span)
                if (text.includes('<')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update page title
        const titleEl = document.querySelector('title');
        if (titleEl && titleEl.dataset.cs && titleEl.dataset.en) {
            document.title = titleEl.getAttribute(`data-${lang}`);
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

document.querySelectorAll('section, .summary-card, .skill-card, .competency-card, .roadmap-item, .quickwin-card, .result-card, .action-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Navbar Scroll Effect
// ========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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
