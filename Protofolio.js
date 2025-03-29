document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navLinkItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Particles.js configuration
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#00d4ff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00d4ff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  // About section tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
    });
  });

  // Skills section tabs
  const skillCategories = document.querySelectorAll('.category');
  const skillContents = document.querySelectorAll('.skills-content');

  skillCategories.forEach(category => {
    category.addEventListener('click', function() {
      const categoryId = this.getAttribute('data-category');
      
      // Remove active class from all categories and contents
      skillCategories.forEach(cat => cat.classList.remove('active'));
      skillContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked category and corresponding content
      this.classList.add('active');
      document.querySelector(`.skills-content[data-category="${categoryId}"]`).classList.add('active');
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      if (isElementInViewport(bar)) {
        bar.style.width = width + '%';
      }
    });
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('load', animateSkillBars);

  // Projects filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Testimonials slider
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentSlide = 0;

  function showSlide(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
  });

  // Auto-advance testimonials
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
  }, 5000);

  // Pause auto-advance on hover
  const slider = document.querySelector('.testimonials-slider');
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialCards.length;
      showSlide(currentSlide);
    }, 5000);
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('.btn-icon');
      
      // Change button text to "Sending..."
      btnText.textContent = 'Sending...';
      btnIcon.style.opacity = '0';
      
      // Simulate form submission (replace with actual AJAX call)
      setTimeout(() => {
        btnText.textContent = 'Message Sent!';
        btnIcon.innerHTML = '<i class="fas fa-check"></i>';
        btnIcon.style.opacity = '1';
        
        // Reset form
        setTimeout(() => {
          contactForm.reset();
          btnText.textContent = 'Send Message';
          btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
        }, 2000);
      }, 1500);
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const input = this.querySelector('input');
      const button = this.querySelector('button');
      
      // Change button icon to checkmark
      button.innerHTML = '<i class="fas fa-check"></i>';
      
      // Reset after 2 seconds
      setTimeout(() => {
        input.value = '';
        button.innerHTML = '<i class="fas fa-paper-plane"></i>';
      }, 2000);
    });
  }
});












// About Section Tabs with Animation
document.addEventListener("DOMContentLoaded", function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Function to switch tabs with animation
  function switchTab(tabId) {
    // Remove active class from all buttons and contents
    tabBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.style.transform = 'scale(1)';
    });
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.style.opacity = '0';
    });
    
    // Add active class to clicked button
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    activeBtn.classList.add('active');
    activeBtn.style.transform = 'scale(1.05)';
    
    // Show corresponding content with animation
    const activeContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
    activeContent.classList.add('active');
    
    // Animate content appearance
    setTimeout(() => {
      activeContent.style.opacity = '1';
    }, 10);
  }
  
  // Add click event to tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Initialize first tab
  switchTab('education');
  
  // Timeline item animation on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  function animateTimelineItems() {
    timelineItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (itemPosition < screenPosition) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 150);
      }
    });
  }
  
  // Set initial state for animation
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease';
  });
  
  // Run on load and scroll
  window.addEventListener('load', animateTimelineItems);
  window.addEventListener('scroll', animateTimelineItems);
  
  // Certificate items hover effect
  const certificateItems = document.querySelectorAll('.certificate-item');
  
  certificateItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });
});






















document.addEventListener("DOMContentLoaded", function() {
  // Tab Switching with Animation
  const categories = document.querySelectorAll('.category');
  const skillsContents = document.querySelectorAll('.skills-content');
  
  categories.forEach(category => {
    category.addEventListener('click', function() {
      const categoryId = this.getAttribute('data-category');
      
      // Remove active class from all categories
      categories.forEach(cat => {
        cat.classList.remove('active');
        cat.style.transform = 'scale(1)';
      });
      
      // Add active class to clicked category with animation
      this.classList.add('active');
      this.style.transform = 'scale(1.05)';
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Hide all skills contents
      skillsContents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
      });
      
      // Show selected skills content with animation
      const activeContent = document.querySelector(`.skills-content[data-category="${categoryId}"]`);
      setTimeout(() => {
        activeContent.classList.add('active');
        activeContent.style.opacity = '1';
        activeContent.style.transform = 'translateY(0)';
      }, 200);
      
      // Animate skill bars
      animateSkillBars(activeContent);
    });
  });
  
  // Animate skill bars on load and tab switch
  function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 300);
    });
  }
  
  // Initial animation for first tab
  animateSkillBars(document.querySelector('.skills-content.active'));
  
  // Skill item hover effects
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.skill-icon');
      icon.style.transform = 'scale(1.2) rotate(15deg)';
      
      const progress = this.querySelector('.skill-progress');
      progress.style.background = 'linear-gradient(90deg, #00d4ff, #ffbe00)';
    });
    
    item.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.skill-icon');
      icon.style.transform = 'scale(1) rotate(0)';
      
      const progress = this.querySelector('.skill-progress');
      progress.style.background = 'linear-gradient(90deg, #00d4ff, #0077ff)';
    });
  });
  
  // Add ripple effect styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});



document.addEventListener("DOMContentLoaded", function() {
  // Initialize particles.js if available
  if (typeof particlesJS !== 'undefined') {
    particlesJS('projects-particles', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#6c5ce7" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#6c5ce7", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }

  // Projects filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remove active class from all buttons with animation
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = 'scale(1)';
        btn.style.opacity = '0.7';
      });
      
      // Add active class to clicked button with animation
      this.classList.add('active');
      this.style.transform = 'scale(1.05)';
      this.style.opacity = '1';
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Filter projects with animation
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        } else {
          card.style.animation = 'fadeOut 0.6s ease forwards';
          setTimeout(() => {
            card.style.display = 'none';
          }, 500);
        }
      });
    });
  });
  
  // Add hover effects to project cards
  projectCards.forEach(card => {
    const links = card.querySelectorAll('.project-link');
    const overlay = card.querySelector('.project-overlay');
    const mockup = card.querySelector('.project-mockup');
    
    // Mouse move effects
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Move glow effect
      const glow = this.querySelector('.project-glow');
      glow.style.transform = `translate(${x - centerX}px, ${y - centerY}px)`;
      
      // Parallax effect for mockup
      if (mockup) {
        const moveX = (x - centerX) / 30;
        const moveY = (y - centerY) / 30;
        mockup.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      
      // Parallax effect for overlay content
      if (overlay) {
        const moveX = (x - centerX) / 40;
        const moveY = (y - centerY) / 40;
        overlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
    
    // Mouse enter effects
    card.addEventListener('mouseenter', function() {
      // Animate links
      links.forEach((link, index) => {
        link.style.transform = 'translateY(0)';
        link.style.opacity = '1';
        link.style.transitionDelay = `${0.3 + (index * 0.1)}s`;
      });
      
      // Start floating animation for mockup
      if (mockup) {
        mockup.style.animation = 'float 6s ease-in-out infinite';
      }
    });
    
    // Mouse leave effects
    card.addEventListener('mouseleave', function() {
      // Reset effects
      const glow = this.querySelector('.project-glow');
      if (glow) glow.style.transform = 'translate(0, 0)';
      
      if (mockup) {
        mockup.style.transform = 'translate(0, 0)';
        mockup.style.animation = 'none';
      }
      
      if (overlay) overlay.style.transform = 'translate(0, 0)';
      
      links.forEach(link => {
        link.style.transform = 'translateY(10px)';
        link.style.opacity = '0';
      });
    });
  });
  
  // Add custom animations to CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }
    
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});




document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const langBtns = document.querySelectorAll('.lang-btn');
  
  let currentIndex = 0;
  let testimonialsArray = Array.from(testimonials);
  let filteredTestimonials = [];
  let autoSlideInterval;
  
  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  // Filter testimonials by language
  function filterTestimonials(lang) {
    if (lang === 'all') {
      filteredTestimonials = testimonialsArray;
    } else {
      filteredTestimonials = testimonialsArray.filter(testimonial => 
        testimonial.getAttribute('data-lang') === lang
      );
    }
    
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
      testimonial.style.display = 'none';
    });
    
    // Show filtered testimonials
    filteredTestimonials.forEach((testimonial, index) => {
      testimonial.style.display = 'block';
      if (index === 0) {
        testimonial.classList.add('active');
      }
    });
    
    // Update dots
    updateDots();
    
    // Reset current index
    currentIndex = 0;
  }
  
  // Update dots based on filtered testimonials
  function updateDots() {
    dots.forEach(dot => dot.remove());
    
    filteredTestimonials.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => goToTestimonial(index));
      dotsContainer.appendChild(dot);
    });
  }
  
  // Go to specific testimonial
  function goToTestimonial(index) {
    if (index < 0 || index >= filteredTestimonials.length) return;
    
    // Hide current testimonial
    filteredTestimonials[currentIndex].classList.remove('active');
    
    // Show new testimonial
    currentIndex = index;
    filteredTestimonials[currentIndex].classList.add('active');
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }
  
  // Next testimonial
  function nextTestimonial() {
    let newIndex = (currentIndex + 1) % filteredTestimonials.length;
    goToTestimonial(newIndex);
  }
  
  // Previous testimonial
  function prevTestimonial() {
    let newIndex = (currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length;
    goToTestimonial(newIndex);
  }
  
  // Auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
  }
  
  // Stop auto slide on hover
  const slider = document.querySelector('.testimonials-slider');
  slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  slider.addEventListener('mouseleave', startAutoSlide);
  
  // Language filter buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Remove active class from all buttons
      langBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter testimonials
      filterTestimonials(lang);
    });
  });
  
  // Navigation buttons
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
  
  // Initialize
  filterTestimonials('all');
  startAutoSlide();
  
  // Add animation to testimonials on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInLeft 0.8s ease forwards`;
      }
    });
  }, { threshold: 0.1 });
  
  testimonials.forEach(testimonial => {
    observer.observe(testimonial);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const langBtns = document.querySelectorAll('.lang-btn');
  
  let currentIndex = 0;
  let testimonialsArray = Array.from(testimonials);
  let filteredTestimonials = [];
  let autoSlideInterval;
  let isAnimating = false;
  
  // Initialize slider
  function initSlider() {
    createDots();
    filterTestimonials('all');
    startAutoSlide();
    addObservers();
  }
  
  // Create dots navigation
  function createDots() {
    dotsContainer.innerHTML = '';
    filteredTestimonials.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === currentIndex) {
        dot.classList.add('active');
        dot.innerHTML = '<span class="dot-pulse"></span>';
      }
      dot.addEventListener('click', () => goToTestimonial(index));
      dotsContainer.appendChild(dot);
    });
  }
  
  // Filter testimonials by language
  function filterTestimonials(lang) {
    if (isAnimating) return;
    isAnimating = true;
    
    // Hide current testimonial
    if (filteredTestimonials[currentIndex]) {
      filteredTestimonials[currentIndex].classList.remove('active', 'next', 'prev');
    }
    
    // Filter testimonials
    if (lang === 'all') {
      filteredTestimonials = testimonialsArray;
    } else {
      filteredTestimonials = testimonialsArray.filter(testimonial => 
        testimonial.getAttribute('data-lang') === lang
      );
    }
    
    // Reset current index
    currentIndex = 0;
    
    // Show filtered testimonials
    setTimeout(() => {
      filteredTestimonials.forEach((testimonial, index) => {
        testimonial.style.display = 'block';
        if (index === currentIndex) {
          testimonial.classList.add('active');
        } else if (index > currentIndex) {
          testimonial.classList.add('next');
        } else {
          testimonial.classList.add('prev');
        }
      });
      
      // Hide non-filtered testimonials
      testimonialsArray.forEach(testimonial => {
        if (!filteredTestimonials.includes(testimonial)) {
          testimonial.style.display = 'none';
        }
      });
      
      createDots();
      isAnimating = false;
    }, 500);
  }
  
  // Go to specific testimonial
  function goToTestimonial(index) {
    if (isAnimating || index === currentIndex || index < 0 || index >= filteredTestimonials.length) return;
    
    isAnimating = true;
    
    // Determine direction
    const direction = index > currentIndex ? 'next' : 'prev';
    
    // Hide current testimonial
    filteredTestimonials[currentIndex].classList.remove('active');
    filteredTestimonials[currentIndex].classList.add(direction === 'next' ? 'prev' : 'next');
    
    // Show new testimonial
    currentIndex = index;
    filteredTestimonials[currentIndex].classList.remove('next', 'prev');
    filteredTestimonials[currentIndex].classList.add('active');
    
    // Update dots
    createDots();
    
    // Reset animation flag
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }
  
  // Next testimonial
  function nextTestimonial() {
    let newIndex = (currentIndex + 1) % filteredTestimonials.length;
    goToTestimonial(newIndex);
  }
  
  // Previous testimonial
  function prevTestimonial() {
    let newIndex = (currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length;
    goToTestimonial(newIndex);
  }
  
  // Auto slide
  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);
  }
  
  // Add intersection observers for animations
  function addObservers() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.testimonial-text, .testimonial-author').forEach(el => {
      observer.observe(el);
    });
  }
  
  // Language filter buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Remove active class from all buttons
      langBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter testimonials
      filterTestimonials(lang);
      
      // Restart auto slide
      startAutoSlide();
    });
  });
  
  // Navigation buttons
  nextBtn.addEventListener('click', () => {
    nextTestimonial();
    startAutoSlide();
  });
  
  prevBtn.addEventListener('click', () => {
    prevTestimonial();
    startAutoSlide();
  });
  
  // Pause auto slide on hover
  const slider = document.querySelector('.testimonials-slider');
  slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  slider.addEventListener('mouseleave', startAutoSlide);
  
  // Initialize slider
  initSlider();
  
  // Add floating animation to active testimonial
  setInterval(() => {
    const activeTestimonial = document.querySelector('.testimonial-card.active .testimonial-content');
    if (activeTestimonial) {
      activeTestimonial.style.animation = 'float 6s ease-in-out infinite';
    }
  }, 100);
});





// Skills Section Functionality
function initSkillsSection() {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button with animation
      this.classList.add('active');
      animateButton(this);
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Show the selected tab content with delay for animation
      setTimeout(() => {
        document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
      }, 200);
    });
  });
  
  // Button animation
  function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  }
  
  // Animate skill bars when in viewport
  const skillBars = document.querySelectorAll('.skill-progress, .language-progress');
  
  function animateBars() {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
      
      if (isVisible && bar.style.width === '0px') {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        
        // Add pulse animation to the parent card
        const card = bar.closest('.skill-card, .language-card');
        if (card) {
          card.style.animation = 'pulse 0.5s ease';
          setTimeout(() => {
            card.style.animation = '';
          }, 500);
        }
      }
    });
  }
  
  // Initialize bars on load and scroll
  window.addEventListener('load', animateBars);
  window.addEventListener('scroll', animateBars);
  
  // Add hover effects to skill cards
  const skillCards = document.querySelectorAll('.skill-card, .language-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      const icon = this.querySelector('.skill-icon, .language-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.color = '#00d4ff';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      const icon = this.querySelector('.skill-icon, .language-icon');
      if (icon) {
        icon.style.transform = '';
        icon.style.color = '';
      }
    });
  });
  
  // Auto-rotate tabs for demo effect (optional)
  let currentTab = 0;
  const autoRotateTabs = setInterval(() => {
    currentTab = (currentTab + 1) % tabBtns.length;
    tabBtns[currentTab].click();
  }, 5000);
  
  // Stop auto-rotation when user interacts
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoRotateTabs);
    });
  });
}

// Initialize skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', initSkillsSection);











// Enhanced Progress Bar Animations
function superchargeProgressBars() {
  const progressBars = document.querySelectorAll('.skill-progress, .language-progress');
  
  // Add loading class initially
  progressBars.forEach(bar => {
    bar.classList.add('loading');
  });
  
  // Animate progress bars when in viewport
  function animateProgressBars() {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0);
      
      if (isVisible && bar.classList.contains('loading')) {
        const width = bar.getAttribute('data-width');
        bar.classList.remove('loading');
        bar.style.width = width + '%';
        
        // Add special effects for high percentages
        if (parseInt(width) >= 95) {
          bar.style.animation = 'progressBounce 1.5s infinite, progressRainbow 3s infinite';
        }
        
        // Add celebration effect for 100% skills
        if (parseInt(width) === 100) {
          createConfetti(bar);
        }
      }
    });
  }
  
  // Create confetti effect
  function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#00d4ff', '#00ff88', '#0077ff', '#ffffff'];
    
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = (rect.left + rect.width) + 'px';
      confetti.style.top = rect.top + 'px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(confetti);
      
      // Animate confetti
      const animation = confetti.animate([
        { 
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1 
        },
        { 
          transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * -150 - 50}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0 
        }
      ], {
        duration: 1000 + Math.random() * 1000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
      });
      
      animation.onfinish = () => confetti.remove();
    }
  }
  
  // Initialize on load and scroll
  window.addEventListener('load', animateProgressBars);
  window.addEventListener('scroll', animateProgressBars);
  
  // Add hover effects
  progressBars.forEach(bar => {
    bar.addEventListener('mouseenter', function() {
      this.style.transform = 'scaleY(1.2)';
      this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.8)';
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'progress-ripple';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
    
    bar.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', superchargeProgressBars);




// Enhanced Skills Section with Advanced Animations
document.addEventListener("DOMContentLoaded", function() {
  // Initialize tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = '';
      });
      
      // Add active class to clicked button with animation
      this.classList.add('active');
      animateButton(this);
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Show the selected tab content with delay for animation
      setTimeout(() => {
        document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
        
        // Animate skill cards in the new tab
        animateSkillCards(`.tab-content[data-tab="${tabId}"] .skill-card`);
      }, 300);
    });
  });
  
  // Button animation
  function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('tab-ripple');
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  }
  
  // Animate skill cards when they come into view
  function animateSkillCards(selector) {
    const skillCards = document.querySelectorAll(selector);
    
    skillCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
      
      if (isVisible) {
        // Animate progress bar
        const progressFill = card.querySelector('.skill-progress-fill');
        const width = progressFill.getAttribute('data-width');
        progressFill.style.width = width + '%';
        
        // Add sparkle effect
        addSparkleEffect(card);
        
        // Animate dots
        const dots = card.querySelectorAll('.skill-dots .dot');
        dots.forEach((dot, i) => {
          setTimeout(() => {
            dot.style.transform = 'translateY(-5px)';
            dot.style.background = '#00d4ff';
          }, i * 100);
        });
      }
    });
  }
  
  // Add sparkle effect to skill card
  function addSparkleEffect(card) {
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';
    card.appendChild(sparklesContainer);
    
    // Create multiple sparkles
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;
        
        // Random size
        const size = Math.random() * 6 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random animation duration
        const duration = Math.random() * 1 + 0.5;
        sparkle.style.animationDuration = `${duration}s`;
        
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, duration * 1000);
      }, i * 100);
    }
    
    // Remove container after all sparkles are gone
    setTimeout(() => {
      sparklesContainer.remove();
    }, 1500);
  }
  
  // Initialize first tab
  if (tabBtns.length > 0) {
    tabBtns[0].click();
  }
  
  // Animate skills on scroll
  window.addEventListener('scroll', function() {
    const activeTabContent = document.querySelector('.tab-content.active');
    if (activeTabContent) {
      animateSkillCards('.tab-content.active .skill-card');
    }
  });
  
  // Auto-rotate tabs for demo (optional)
  let currentTabIndex = 0;
  const autoRotateInterval = setInterval(() => {
    currentTabIndex = (currentTabIndex + 1) % tabBtns.length;
    tabBtns[currentTabIndex].click();
  }, 5000);
  
  // Stop auto-rotation when user interacts
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoRotateInterval);
    });
  });
  
  // Add hover effects to skill cards
  const allSkillCards = document.querySelectorAll('.skill-card');
  allSkillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      
      // Animate icon
      const icon = this.querySelector('.skill-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(15deg)';
        icon.style.color = 'white';
        icon.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.7)';
      }
      
      // Animate orb
      const orb = this.querySelector('.skill-orb');
      if (orb) {
        orb.style.width = '120px';
        orb.style.height = '120px';
        orb.style.animation = 'rotateOrb 4s linear infinite';
      }
      
      // Animate dots
      const dots = this.querySelectorAll('.skill-dots .dot');
      dots.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.transform = 'translateY(-5px)';
          dot.style.background = '#00d4ff';
        }, i * 100);
      });
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      
      // Reset icon
      const icon = this.querySelector('.skill-icon i');
      if (icon) {
        icon.style.transform = '';
        icon.style.color = '';
        icon.style.textShadow = '';
      }
      
      // Reset orb
      const orb = this.querySelector('.skill-orb');
      if (orb) {
        orb.style.width = '0';
        orb.style.height = '0';
        orb.style.animation = '';
      }
      
      // Reset dots
      const dots = this.querySelectorAll('.skill-dots .dot');
      dots.forEach(dot => {
        dot.style.transform = '';
        dot.style.background = '';
      });
    });
  });
});

// Add CSS for sparkles dynamically
const style = document.createElement('style');
style.textContent = `
  .sparkles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .sparkle {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    animation: sparkleAnimation linear forwards;
    filter: blur(1px);
  }
  
  @keyframes sparkleAnimation {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.8;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0) translateY(-20px);
    }
  }
  
  .tab-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: rippleEffect 0.6s ease-out forwards;
    pointer-events: none;
  }
  
  @keyframes rippleEffect {
    to {
      transform: translate(-50%, -50%) scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);



// Enhanced Skills Section Functionality
function initSkillsSection() {
  // Tab switching functionality with enhanced animations
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons with animation
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 300);
      });
      
      // Add active class to clicked button with enhanced animation
      this.classList.add('active');
      animateButton(this);
      
      // Hide all tab contents with fade out animation
      tabContents.forEach(content => {
        content.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
          content.classList.remove('active');
          content.style.animation = '';
        }, 500);
      });
      
      // Show the selected tab content with delay for animation
      setTimeout(() => {
        const activeContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
        activeContent.classList.add('active');
        activeContent.style.animation = 'fadeIn 0.8s ease forwards';
        
        // Animate skill cards in the new tab
        animateSkillCards(activeContent);
      }, 500);
    });
  });
  
  // Enhanced button animation with ripple effect
  function animateButton(button) {
    // Scale animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1.05)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 200);
    }, 200);
    
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  }
  
  // Animate skill cards when they come into view
  function animateSkillCards(container) {
    const skillCards = container.querySelectorAll('.skill-card, .language-card');
    const progressBars = container.querySelectorAll('.progress-fill');
    
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
              card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
              
              // Animate progress bars
              const progressFill = card.querySelector('.progress-fill');
              if (progressFill) {
                const width = progressFill.parentElement.getAttribute('data-percent');
                progressFill.style.width = width + '%';
                
                // Add pulse animation to card
                card.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                  card.style.animation = '';
                }, 500);
              }
              
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(card);
      }, index * 100);
    });
  }
  
  // Initialize animation for first tab
  setTimeout(() => {
    animateSkillCards(document.querySelector('.tab-content.active'));
  }, 500);
  
  // Add hover effects to skill cards
  const skillCards = document.querySelectorAll('.skill-card, .language-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.03)';
      this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.3)';
      
      const icon = this.querySelector('.skill-icon, .language-icon');
      if (icon) {
        icon.style.transform = 'rotate(15deg) scale(1.2)';
        icon.style.color = '#ffffff';
        icon.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.7)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      
      const icon = this.querySelector('.skill-icon, .language-icon');
      if (icon) {
        icon.style.transform = '';
        icon.style.color = '';
        icon.style.textShadow = '';
      }
    });
  });
  
  // Auto-rotate tabs with enhanced effect
  let currentTab = 0;
  const autoRotateTabs = setInterval(() => {
    currentTab = (currentTab + 1) % tabBtns.length;
    tabBtns[currentTab].click();
    
    // Add visual indicator for auto-rotation
    tabBtns[currentTab].classList.add('auto-rotating');
    setTimeout(() => {
      tabBtns[currentTab].classList.remove('auto-rotating');
    }, 1000);
  }, 8000);
  
  // Stop auto-rotation when user interacts
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoRotateTabs);
    });
  });
  
  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(30px); }
    }
    @keyframes pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); }
    }
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    .auto-rotating {
      animation: pulse 1s ease infinite;
    }
  `;
  document.head.appendChild(style);
}

// Initialize skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', initSkillsSection);