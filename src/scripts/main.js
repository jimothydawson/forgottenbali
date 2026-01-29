/**
 * Forgotten Bali - Interactive Scripts
 * Mobile menu, bio image rotator, reviews slider, and scroll reveals
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initBioRotator();
    initReviewsSlider();
    initScrollReveal();
    initSmoothScroll();
});

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.onclick = () => {
        mobileMenu.classList.toggle('hidden');
        const isHidden = mobileMenu.classList.contains('hidden');
        menuIcon.setAttribute('d', isHidden ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12');
        document.body.style.overflow = isHidden ? '' : 'hidden';
    };

    // Close menu when any link is clicked (now handles any link in the menu)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.onclick = () => {
            mobileMenu.classList.add('hidden');
            if (menuIcon) menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            document.body.style.overflow = '';
        };
    });
}

/**
 * Bio Image Rotating Picture Frame
 */
function initBioRotator() {
    const bioImages = document.querySelectorAll('#bio-frame img');
    let currentBioIdx = 0;

    if (bioImages.length > 1) {
        setInterval(() => {
            bioImages[currentBioIdx].style.opacity = '0';
            currentBioIdx = (currentBioIdx + 1) % bioImages.length;
            bioImages[currentBioIdx].style.opacity = '1';
        }, 4000);
    }
}

/**
 * Reviews Slider
 */
function initReviewsSlider() {
    const track = document.querySelector('.reviews-track');
    const slides = document.querySelectorAll('.reviews-track > div');
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');

    if (!track || slides.length === 0) return;

    let currentSlide = 0;
    const slideCount = slides.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    if (nextBtn) nextBtn.onclick = nextSlide;
    if (prevBtn) prevBtn.onclick = prevSlide;

    // Auto-play
    let interval = setInterval(nextSlide, 8000);

    // Pause on interaction
    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 8000);
    };

    if (nextBtn) nextBtn.addEventListener('click', resetInterval);
    if (prevBtn) prevBtn.addEventListener('click', resetInterval);
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
