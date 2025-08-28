// Particles.js initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: ["#00ffff", "#ff00ff", "#ffffff"] },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "grab" } }
  }
});

// Modal logic
const modal = document.getElementById("buyModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Optional: close modal if clicking outside content
window.addEventListener("click", (e) => {
    if(e.target === modal) modal.style.display = "none";
});
