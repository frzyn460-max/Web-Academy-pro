// === لودینگ صفحه ===
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 500);
});

// === تم تاریک/روشن ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// بارگذاری تنظیمات ذخیره شده
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  }
});

// === منوی موبایل ===
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// بستن منو با کلیک روی لینک‌ها
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// بستن منو با کلیک خارج از آن
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// === جستجوی سراسری ===
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const globalSearch = document.getElementById('globalSearch');

searchToggle.addEventListener('click', () => {
  searchOverlay.classList.add('active');
  setTimeout(() => globalSearch.focus(), 300);
});

searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  globalSearch.value = '';
});

// بستن با کلیک روی overlay
searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove('active');
  }
});

// بستن با Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
    searchOverlay.classList.remove('active');
  }
});

// === اسلایدر اصلی ===
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  // حذف کلاس active از همه
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // اضافه کردن به اسلاید فعلی
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// رویدادها
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlideShow();
  startSlideShow();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlideShow();
  startSlideShow();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    stopSlideShow();
    startSlideShow();
  });
});

// شروع اسلایدر خودکار
startSlideShow();

// توقف اسلایدر هنگام hover
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', stopSlideShow);
heroSlider.addEventListener('mouseleave', startSlideShow);

// === اسکرول ناوبری ===
const mainNav = document.querySelector('.main-navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// === انیمیشن آمار (Counter) ===
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
  if (hasAnimated) return;
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current).toLocaleString('fa-IR');
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target.toLocaleString('fa-IR');
      }
    };
    
    updateCounter();
  });
  
  hasAnimated = true;
}

// Intersection Observer برای آمار
const statsSection = document.querySelector('.stats-section');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

// === فیلتر دوره‌ها ===
const courseSearch = document.getElementById('courseSearch');
const categoryChips = document.querySelectorAll('.chip');
const levelOptions = document.querySelectorAll('.level-option input');
const courseCards = document.querySelectorAll('.course-card');

function filterCourses() {
  const searchTerm = courseSearch.value.toLowerCase().trim();
  const activeCategory = document.querySelector('.chip.active')?.dataset.category || 'all';
  const activeLevel = document.querySelector('.level-option input:checked')?.value || 'all';
  
  courseCards.forEach(card => {
    const title = card.dataset.title?.toLowerCase() || '';
    const category = card.dataset.category || '';
    const level = card.dataset.level || '';
    
    const matchesSearch = searchTerm === '' || title.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;
    const matchesLevel = activeLevel === 'all' || level === activeLevel;
    
    if (matchesSearch && matchesCategory && matchesLevel) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.5s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// رویدادهای فیلتر
if (courseSearch) {
  courseSearch.addEventListener('input', filterCourses);
}

categoryChips.forEach(chip => {
  chip.addEventListener('click', () => {
    categoryChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filterCourses();
  });
});

levelOptions.forEach(option => {
  option.addEventListener('change', filterCourses);
});

// === دکمه بازگشت به بالا ===
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// === اسکرول نرم برای لینک‌ها ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// === خبرنامه ===
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // نمایش پیام موفقیت
    const button = newsletterForm.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> ثبت شد!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
      newsletterForm.reset();
    }, 3000);
  });
}

// === دکمه مشاوره ===
const consultationBtn = document.querySelector('.consultation-btn');

if (consultationBtn) {
  consultationBtn.addEventListener('click', () => {
    alert('به زودی با شما تماس خواهیم گرفت!\n\nلطفاً شماره تماس خود را در بخش تماس با ما ثبت کنید.');
  });
}

// === دکمه بارگذاری بیشتر ===
const loadMoreBtn = document.getElementById('loadMore');
let coursesLoaded = 9;

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    // شبیه‌سازی بارگذاری دوره‌های بیشتر
    loadMoreBtn.querySelector('span').textContent = 'در حال بارگذاری...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
      coursesLoaded += 6;
      loadMoreBtn.querySelector('span').textContent = 'مشاهده دوره‌های بیشتر';
      loadMoreBtn.disabled = false;
      
      // اگر همه دوره‌ها نمایش داده شد
      if (coursesLoaded >= 20) {
        loadMoreBtn.style.display = 'none';
      }
    }, 1000);
  });
}

// === Lazy Loading برای تصاویر ===
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// === پیش‌بارگذاری تصاویر ===
function preloadImages() {
  const images = [
    './image/3.jpg',
    './image/2.jpg',
    './image/1.jpg'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadImages();

// === انیمیشن ورود عناصر ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// اعمال انیمیشن به عناصر
document.querySelectorAll('.course-card, .stat-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// === مدیریت فرم‌ها ===
function handleFormSubmit(formId, successMessage) {
  const form = document.getElementById(formId);
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // اعتبارسنجی
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '';
      }
    });
    
    if (isValid) {
      // نمایش پیام موفقیت
      alert(successMessage);
      form.reset();
    }
  });
}

// === امنیت: جلوگیری از XSS در جستجو ===
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// اعمال sanitization به ورودی جستجو
if (courseSearch) {
  courseSearch.addEventListener('input', (e) => {
    e.target.value = sanitizeInput(e.target.value);
  });
}

if (globalSearch) {
  globalSearch.addEventListener('input', (e) => {
    e.target.value = sanitizeInput(e.target.value);
  });
}

// === کنسول - پیام خوشامدگویی ===
console.log('%c🚀 خوش آمدید به وب آکادمی!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cبرای مشاهده فرصت‌های شغلی و همکاری با ما تماس بگیرید!', 'color: #8b5cf6; font-size: 14px;');

// === Performance Optimization ===
// Debounce function برای بهبود عملکرد
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// اعمال debounce به رویدادهای scroll
const debouncedScroll = debounce(() => {
  // عملیات scroll
}, 10);

window.addEventListener('scroll', debouncedScroll);

// === تشخیص دستگاه ===
function isMobile() {
  return window.innerWidth <= 768;
}

function isTablet() {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// تنظیمات بر اساس دستگاه
if (isMobile()) {
  // تنظیمات موبایل
  document.body.classList.add('mobile-device');
}

// === مدیریت Touch Events برای موبایل ===
let touchStartX = 0;
let touchEndX = 0;

if (heroSlider) {
  heroSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  heroSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right
      prevSlide();
    }
  }
}

// === ذخیره موقعیت اسکرول ===
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPosition', window.pageYOffset);
});

window.addEventListener('load', () => {
  const scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition));
    sessionStorage.removeItem('scrollPosition');
  }
});

// === پیام خطا در کنسول برای توسعه‌دهندگان ===
window.addEventListener('error', (e) => {
  console.error('خطا:', e.message);
});

// === آماده‌سازی نهایی ===
document.addEventListener('DOMContentLoaded', () => {
  console.log('صفحه با موفقیت بارگذاری شد! ✅');
  
  // حذف کلاس loading از body
  document.body.classList.remove('loading');
  
  // اجرای انیمیشن‌های ورودی
  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '1';
  });
});