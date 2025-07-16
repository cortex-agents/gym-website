// var movementStrength = 25;

// const hero = document.getElementById("section-hero");

// var modal = document.getElementById("offerModal");

// var closeButton = document.querySelector(".close-button");

// closeButton.onclick = function () {
//   modal.style.display = "none";
// };

// hero.addEventListener("mousemove", (e) => {
//   const div = document.createElement("div");
//   div.classList.add("hero-section-mouseClick");
//   div.style.left = e.pageX + "px";
//   div.style.top = e.pageY + "px";
//   const box = document.getElementById("section-hero");
//   box.appendChild(div);
//   setTimeout(() => {
//     box.removeChild(div);
//     div.remove();
//   }, 200);
// });

// Responsive nav hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('nav-active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
}
