// Basic console log
console.log("IRLP Lab website loaded.");

// Hamburger menu toggle (safe with optional chaining)
document.getElementById('hamburger')?.addEventListener('click', function () {
  document.getElementById('navbar')?.classList.toggle('active');
});

// Lightbox functionality for media coverage
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const overlay = document.querySelector('.lightbox-overlay');
  const img = overlay?.querySelector('img');
  const caption = overlay?.querySelector('.lightbox-caption');
  const closeBtn = overlay?.querySelector('.lightbox-close');

  if (!triggers.length || !overlay || !img || !caption || !closeBtn) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      img.src = trigger.getAttribute('data-full');
      const text = trigger.getAttribute('data-caption');
      const link = trigger.getAttribute('data-link');
      caption.innerHTML = `${text} — <a href="${link}" target="_blank" rel="noopener noreferrer">Read Paper</a>`;
      overlay.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});

// Image rotation in About section

const imageElement = document.getElementById("rotatingImage");

const imagePaths = [
  "assets/gallary/fire_1.jpg",
  "assets/gallary/fire_9.jpg",
  "assets/gallary/fire_10.jpg",
  "assets/gallary/fire_12.jpg",
  "assets/gallary/IMG_8375.JPG",
  "assets/gallary/11.jpeg",
  "assets/gallary/15.jpeg", 
  "assets/gallary/16.jpeg",
  "assets/gallary/27.jpeg",
  "assets/gallary/28.jpeg",
  "assets/gallary/31.jpeg",
  "assets/gallary/54.jpeg"

];

let currentIndex = 0;

function rotateImage() {
  if (!imageElement) return; // safety check
  imageElement.classList.add("fade"); // fade out

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    imageElement.src = imagePaths[currentIndex];
    imageElement.classList.remove("fade"); // fade in
  }, 1000);
}

// Rotate every 5 seconds (5000 ms)
setInterval(rotateImage, 5000);
