document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // عدد الجزيئات
        density: {
          enable: true,
          value_area: 800, // كثافة الجزيئات
        },
      },
      color: {
        value: "#ffd700", // لون الجزيئات (ذهبي)
      },
      shape: {
        type: "circle", // شكل الجزيئات
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffd700",
        opacity: 0.4,
        width: 1,
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
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // الجزيئات تتحرك بعيدًا عند المرور عليها
        },
        onclick: {
          enable: true,
          mode: "push", // إضافة جزيئات جديدة عند النقر
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});

















document.addEventListener("DOMContentLoaded", function () {
  // تحديد جميع روابط الـNavbar التي تحتوي على hash (مثل #home, #about, إلخ)
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // منع التصرف الافتراضي للنقر (الانتقال الفوري)

          // الحصول على الـid الخاص بالقسم الذي سيتم الانتقال إليه
          const targetId = link.getAttribute('href').substring(1); // إزالة الـ# للحصول على الـid
          const targetElement = document.getElementById(targetId); // العثور على العنصر باستخدام id

          // إضافة تأثير سلاسة الحركة للانتقال إلى القسم
          window.scrollTo({
              top: targetElement.offsetTop, // تحديد المكان الذي سيتم التمرير إليه
              behavior: 'smooth' // السلاسة
          });

          // إضافة تأثير الرسوم المتحركة عند الانتقال
          targetElement.classList.add('scroll-animation');

          // إزالة التأثير بعد الانتهاء من الرسوم المتحركة (اختياري)
          setTimeout(() => {
              targetElement.classList.remove('scroll-animation');
          }, 1000); // 1000 ملي ثانية، حسب المدة التي تريدها للأنيميشن
      });
  });
});













document.addEventListener("DOMContentLoaded", function () {
  // الحصول على زر "Explore More"
  const exploreMoreBtn = document.getElementById('exploreMoreBtn');

  // الحصول على قسم "About" باستخدام الـid الخاص به (تأكد من أن قسم About له id="about")
  const aboutSection = document.getElementById('about');

  exploreMoreBtn.addEventListener('click', function (e) {
      e.preventDefault(); // منع التصرف الافتراضي (أي أنشطة أخرى قد تحدث عند النقر)

      // التمرير إلى قسم "About" بسلاسة
      window.scrollTo({
          top: aboutSection.offsetTop, // تحديد مكان قسم About
          behavior: 'smooth' // إضافة السلاسة في الانتقال
      });

      // إضافة أنيميشن إلى قسم About عند الانتقال إليه
      aboutSection.classList.add('scroll-animation');

      // إزالة الأنيميشن بعد مدة محددة (اختياري)
      setTimeout(() => {
          aboutSection.classList.remove('scroll-animation');
      }, 1000); // بعد 1 ثانية، ستتم إزالة الأنيميشن
  });
});










document.addEventListener("DOMContentLoaded", () => {
  // النصوص تظهر عند التمرير
  const textContent = document.querySelector("#about .text-content");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textContent.style.opacity = "1";
          textContent.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.3 } // يبدأ الأنيميشن عند ظهور 30% من العنصر
  );

  observer.observe(textContent);

  // تحريك الدائرة العائمة
  const floatingCircle = document.querySelector(".floating-circles");
  if (floatingCircle) {
    const animateCircle = () => {
      const randomX = Math.random() * 20 - 10; // حركة عشوائية على المحور X
      const randomY = Math.random() * 20 - 10; // حركة عشوائية على المحور Y

      floatingCircle.style.transform = 'translate(-50%, -50%) translate(${randomX}px, ${randomY}px)';
      floatingCircle.style.transition = "transform 4s ease-in-out";
    };

    setInterval(animateCircle, 2000); // تشغيل الأنيميشن كل 2 ثوانٍ
  }
});








document.addEventListener("DOMContentLoaded", () => {
  // Animation on scroll for the intro text
  const homeSection = document.querySelector("#home .intro");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          homeSection.style.opacity = "1";
          homeSection.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(homeSection);

  // Animated CTA Button
  const ctaButton = document.querySelector("#home .cta-button");
  setInterval(() => {
    ctaButton.style.transform = "scale(1.1)";
    setTimeout(() => {
      ctaButton.style.transform = "scale(1)";
    }, 500);
  }, 2000);
});











document.addEventListener("DOMContentLoaded", function () {

  // ----------------------------------------
  //  Progress Bars Animation 
  // ----------------------------------------

  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(function(bar) {
    const percentage = parseInt(bar.parentElement.querySelector('.percentage').innerText);
    // تم إضافة أنيميشن لتغيير العرض
    bar.style.transition = 'width 2s ease-in-out';
    bar.style.width = '${percentage}%';
  });

  // ----------------------------------------
  //  Progress Circles Animation 
  // ----------------------------------------

  const progressCircles = document.querySelectorAll('.progress-circle');
  progressCircles.forEach(function(circle) {
    const percentage = parseInt(circle.parentElement.querySelector('.percentage-circle').innerText);
    const circleLength = 340;  // محيط الدائرة
    const progress = circleLength - (circleLength * (percentage / 100));

    // إضافة أنيميشن لتغيير الـ stroke-dashoffset
    circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    circle.style.strokeDashoffset = progress;
  });

  // ----------------------------------------
  //  Skill Boxes Animation 
  // ----------------------------------------

  const skillBoxes = document.querySelectorAll('.skill-box');
  skillBoxes.forEach(function(skillBox, index) {
    setTimeout(function() {
      skillBox.classList.add('visible'); // إضافة صناديق المهارات بشكل تدريجي
    }, 300 * index);  // تأخير ظهور كل صندوق بشكل تدريجي
  });

  // ----------------------------------------
  //  Soft Skill Circles Hover Animation 
  // ----------------------------------------

  const softSkills = document.querySelectorAll('.soft-skill');
  softSkills.forEach(function(skill) {
    const circle = skill.querySelector('circle');
    skill.addEventListener('mouseover', function() {
      // إظهار الـ percentage عند المرور
      const percentage = skill.querySelector('.percentage-circle').innerText;
      skill.querySelector('.percentage-circle').style.opacity = 1;

      // إضافة تأثير الدائرة عند التمرير
      circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
      const circleLength = 340;  // محيط الدائرة
      const progress = circleLength - (circleLength * (percentage / 100));
      circle.style.strokeDashoffset = progress;
    });

    skill.addEventListener('mouseout', function() {
      // إعادة تعيين الـ opacity عند الخروج
      skill.querySelector('.percentage-circle').style.opacity = 0.5;
    });
  });

  // ----------------------------------------
  //  Scroll Animations using IntersectionObserver 
  // ----------------------------------------

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // إضافة أنيميشن عند التمرير للظهور
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.3 }); // تفعيل عند 30% من العنصر في الشاشة

  // مراقبة صناديق المهارات (Skill Boxes)
  document.querySelectorAll('.skill-box').forEach(skillBox => {
    observer.observe(skillBox);
  });

  // مراقبة دوائر المهارات الناعمة (Soft Skills Circles)
  document.querySelectorAll('.soft-skill').forEach(softSkill => {
    observer.observe(softSkill);
  });

  // ----------------------------------------
  //  Fade In Effect for Elements 
  // ----------------------------------------

  // إضافة تأثير التلاشي للعناصر عند التمرير
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(function(el) {
    observer.observe(el);
  });

  // ----------------------------------------
  //  Helper function to animate skill boxes (fade-in) 
  // ----------------------------------------

  const style = document.createElement('style');
  style.innerHTML = `
    .skill-box.visible {
      animation: fadeIn 1s ease-out forwards;
    }

    .soft-skill.visible {
      animation: fadeIn 1s ease-out forwards;
    }

    .fade-in.visible {
      animation: fadeIn 1s ease-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // ----------------------------------------
  //  Smooth Scroll to Section 
  // ----------------------------------------

  const scrollToSkillsButton = document.getElementById('scroll-to-skills');
  if (scrollToSkillsButton) {
    scrollToSkillsButton.addEventListener('click', function() {
      const skillsSection = document.getElementById('skills');
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

});

















document.addEventListener("DOMContentLoaded", function() {
  // Apply the animations for the progress bars and circles
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressCircles = document.querySelectorAll(".progress-circle");

  progressBars.forEach(function(bar) {
      let percentage = bar.parentElement.querySelector(".percentage").innerText;
      bar.style.width = percentage;
  });

  progressCircles.forEach(function(circle) {
      let percentage = circle.parentElement.parentElement.querySelector(".percentage-circle").innerText;
      let progress = 283 - (283 * (parseInt(percentage) / 100));
      circle.style.strokeDashoffset = progress;
  });
});






// Contact Section Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
  
    const message = document.getElementById('message').value.trim();
  
    if (!message) {
      alert('Please enter a message before sending.');
      return;
    }
  
    // Simulate sending a message (Replace this with actual API or backend call)
    alert('Your message has been sent successfully!');
    document.getElementById('message').value = ''; // Clear the input
  });

























  






// Initialize AOS (Animate on Scroll) library
AOS.init({
  duration: 1000,  // Set duration for animations
  easing: 'ease-in-out', // Smooth easing
  once: true, // Trigger animation only once
  offset: 200 // Animation trigger offset
});

// Handle 'View Details' button click to scroll smoothly to another section
document.querySelectorAll('.view-details').forEach(button => {
  button.addEventListener('click', function() {
      window.scrollTo({
          top: document.querySelector('#about').offsetTop - 50, // Scroll to About section
          behavior: 'smooth'
      });
  });
});