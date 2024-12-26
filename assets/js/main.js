

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.querySelector('.progress-bar');
  const loadingText = document.querySelector('.loader-text');
  const minimumLoadTime = 2500; // 2.5 seconds minimum display time
  const startTime = Date.now();
  let progress = 0;

  // Update progress bar
  function updateProgress() {
    if (progress < 90) {
      progress += Math.random() * 20;
      progress = Math.min(progress, 90);
      progressBar.style.width = progress + '%';
      loadingText.textContent = 'Loading... ' + Math.round(progress) + '%';
    }
  }

  // Start progress updates
  const progressInterval = setInterval(updateProgress, 200);

  // Hide preloader function
  function hidePreloader() {
    // Quickly complete the progress bar
    progress = 100;
    progressBar.style.width = '100%';
    loadingText.textContent = 'Loading... 100%';
    
    // Clear the progress interval
    clearInterval(progressInterval);
    
    // Add slight delay before hiding
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 400);
  }

  // Handle page load
  window.addEventListener('load', function() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    
    if (elapsedTime < minimumLoadTime) {
      setTimeout(hidePreloader, minimumLoadTime - elapsedTime);
    } else {
      hidePreloader();
    }
  });
});
    

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

const container = document.getElementById('testimonialContainer');
const dots = document.querySelectorAll('.testimonial-dot');
let index = 0;

function updateTestimonials() {
  container.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  index = (index + 1) % dots.length;
  updateTestimonials();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateTestimonials();
  });
});

setInterval(autoSlide, 5000);


  /**
   * cookie
   */

document.addEventListener("DOMContentLoaded", function() {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptCookies = document.getElementById("acceptCookies");
  const rejectCookies = document.getElementById("rejectCookies");
  
  // Show cookie consent popup only if not already accepted or rejected
  if (localStorage.getItem("cookiesAccepted") === null) {
      cookieConsent.classList.remove("d-none");
  } else if (localStorage.getItem("cookiesAccepted") === "false") {
      cookieConsent.classList.add("d-none");
  }
  
  acceptCookies.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", "true");
      cookieConsent.classList.add("d-none");  // Hide the cookie consent message
  });
  
  rejectCookies.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", "false");
      cookieConsent.classList.add("d-none");  // Hide the cookie consent message
  });
});