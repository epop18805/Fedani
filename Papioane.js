const images = document.querySelectorAll(".gallery .image img");
const carousel = document.getElementById("carousel");
const carouselImages = document.querySelectorAll(".carousel-content img");
let currentImageIndex = 0;

function openCarousel(index) {
  currentImageIndex = index;
  showImage(currentImageIndex);
  carousel.classList.add("show");
}

function closeCarousel() {
  carousel.classList.remove("show");
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

function showImage(index) {
  carouselImages.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openCarousel(index);
  });
});

document.getElementById("prevButton").addEventListener("click", () => {
  changeImage(-1);
});

document.getElementById("nextButton").addEventListener("click", () => {
  changeImage(1);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    changeImage(-1);
  } else if (event.key === "ArrowRight") {
    changeImage(1);
  }
});
