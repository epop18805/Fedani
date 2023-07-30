var currentImageIndex = 0;
var modal = document.getElementById("myModal");
var modalImage = document.getElementsByClassName("modal-image")[0];
var images = document.querySelectorAll(".gallery .image img");

function openModal(index) {
  currentImageIndex = index;
  modalImage.src = images[currentImageIndex].src;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  modalImage.src = images[currentImageIndex].src;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    changeImage(-1);
  } else if (event.key === "ArrowRight") {
    changeImage(1);
  }
});
