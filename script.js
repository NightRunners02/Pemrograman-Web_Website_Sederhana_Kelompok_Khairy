
      // Ambil elemen hamburger & navbar
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle menu aktif
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("open");
});

      // Typing effect
      const typingText = document.getElementById("typing");
      const words = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
      let wordIndex = 0;
      let charIndex = 0;

      function typeEffect() {
        if (charIndex < words[wordIndex].length) {
          typingText.textContent += words[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeEffect, 100);
        } else {
          setTimeout(eraseEffect, 1500);
        }
      }

      function eraseEffect() {
        if (charIndex > 0) {
          typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseEffect, 50);
        } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 300);
        }
      }

      document.addEventListener("DOMContentLoaded", typeEffect);

      