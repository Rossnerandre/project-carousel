let slideIndex = 1;
showSlide(slideIndex);

function sliderPlus(n) {
  showSlide(slideIndex += n);
}

function currenteSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var images = document.querySelectorAll('.img');
  var dots = document.querySelectorAll('.dot');

  if (n > images.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = images.length }

  for (i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  images[slideIndex - 1].className += (' active');
  dots[slideIndex - 1].className += (' active');
}

// Slider thumbnail
let slideIndexThumb = 1;
showSlideThumb(slideIndexThumb);

function thumbPlus(n) {
  showSlideThumb(slideIndexThumb += n);
}

function currentThumb(n) {
  showSlideThumb(slideIndexThumb = n);
}

function showSlideThumb(n) {
  var images = document.querySelectorAll('.img2');
  var dots = document.querySelectorAll('.thumb');

  if (n > images.length) { slideIndexThumb = 1 }
  if (n < 1) { slideIndexThumb = images.length }

  for (i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  images[slideIndexThumb - 1].className += (' active');
  dots[slideIndexThumb - 1].className += (' active');
}
