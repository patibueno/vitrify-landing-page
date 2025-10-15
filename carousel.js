const slides = [
  {
    img: "img/Daniel.png",
    name: "Daniel Magalhães",
    role: "Founder and Head of Strategy and Sales",
  },
  {
    img: "img/Edson.png",
    name: "Edson Lopes",
    role: "Co-founder and CEO",
  },
  {
    img: "img/Gabriela.png",
    name: "Gabriela Pini",
    role: "Head of Products",
  },
  {
    img: "img/Pantalena.png",
    name: "Alexandre Pantalena",
    role: "Head of Technology",
  },
  {
    img: "img/Josemar.png",
    name: "Josemar Flausino",
    role: "Software developer",
  },
  {
    img: "img/Guilherme.png",
    name: "Guilherme Tavares",
    role: "Data engineer",
  },
  {
    img: "img/Patricia.png",
    name: "Patricia Bueno",
    role: "Software developer",
  },
];

let current = 0;
let intervalId = null;

function updateSlide(index) {
  const slide = slides[index];
  document.getElementById("carousel-img").src = slide.img;
  document.getElementById("carousel-name").textContent = slide.name;
  document.getElementById("carousel-role").textContent = slide.role;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlide(current);
  resetAutoSlide();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
  resetAutoSlide();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(intervalId);
  startAutoSlide();
}

window.addEventListener("DOMContentLoaded", () => {
  updateSlide(current);
  startAutoSlide();

    document.getElementById("prev-btn").addEventListener("click", prevSlide);
  document.getElementById("next-btn").addEventListener("click", nextSlide);
});
