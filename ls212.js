const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider-dots__item');

let index = 0;

const setActive = (elem, indexElem) => {
  for (let item of elem) {
    item.classList.remove('active');
  }
  elem[indexElem].classList.add('active');
}

const getCurrentSlide = i => {
  setActive(slides, i);
  setActive(dots, i);
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  getCurrentSlide(index);
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  getCurrentSlide(index);
}

dots.forEach((dot, indexDot) => {
  dot.addEventListener('click', () => {
    index = indexDot;
    getCurrentSlide(index);

  })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
