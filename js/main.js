const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlideIndex = 0;
const slidesPerView = 3;

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', (index >= currentSlideIndex && index < currentSlideIndex + slidesPerView));
  });
  slideContainer.style.transform = `translateX(-${currentSlideIndex * (100 / slidesPerView)}%)`;
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlides();
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlides();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlides();