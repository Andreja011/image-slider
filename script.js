const slidesContainer = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".carousel-slides img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");
const secondNumber = document.querySelector(`.second-num`);
const firstNumber = document.querySelector(`.first-num`);
let slideIndex = 0;
let numOfPictures = slides.length;

function showTotalImageNumber(numOfPictures) {
  secondNumber.innerText = numOfPictures;
}
showTotalImageNumber(numOfPictures);

function updateImageNumb(index) {
  firstNumber.innerText = index;
}
updateImageNumb(slideIndex + 1);

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  updateImageNumb(index + 1);
}

function setActiveDot(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  setActiveDot(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
  setActiveDot(slideIndex);
}

function jumpToSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
  setActiveDot(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => jumpToSlide(index));
});

// Auto-advance every 5 seconds
setInterval(nextSlide, 5000);
