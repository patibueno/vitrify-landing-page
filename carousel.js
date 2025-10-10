const slides = [
  {
    img: "/img/dani.avif",
    name: "Daniel Magalhães",
    role: "Founder and Head of Strategy and Sales",
  },
  {
    img: "/img/edson.avif",
    name: "Edson Lopes",
    role: "Co-founder and CEO",
  },
  {
    img: "/img/gabi.avif",
    name: "Gabriela Pini",
    role: "Head of Products",
  },
  {
    img: "/img/panta.avif",
    name: "Alexandre Pantalena",
    role: "Head of Technology",
  },
  {
    img: "/img/josemar.avif",
    name: "Josemar Flausino",
    role: "Software developer",
  },
  {
    img: "/img/gui.avif",
    name: "Guilherme Tavares",
    role: "Data engineer",
  },
  {
    img: "/img/pati.avif",
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
